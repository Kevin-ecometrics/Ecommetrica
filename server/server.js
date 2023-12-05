const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const cors = require('cors');
const saltRounds = 10;

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // reemplaza esto con la URL de tu frontend
  methods: ['GET', 'POST'],
  credentials: true // esto permite el envío de cookies
}));

app.use(express.json());

app.use(session({
  secret: 'secreto',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // establece esto en true si estás en https
}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'login'
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta SELECT:', err);
      return res.status(500).send('Error interno del servidor');
    }

    if (results.length > 0) {
      const user = results[0];

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          console.error('Error al comparar las contraseñas:', err);
          return res.status(500).send('Error interno del servidor');
        }

        if (result) {
          // Las contraseñas coinciden
          req.session.user = user;
          console.log(req.session.user);
          res.json({ success: true, message: 'Inicio de sesión exitoso'});
        } else {
          // Las contraseñas no coinciden
          res.status(401).json({ error: 'Credenciales inválidas' });
        }
      });
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  });
});

app.post('/register', (req, res) => {
  const { username, email, password, rol } = req.body;

  if (!username || !email || !password || !rol) {
    return res.status(400).json({ error: 'Se requiere un correo electrónico y una contraseña.' });
  }

  connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta SELECT:', err);
      return res.status(500).send('Error interno del servidor');
    }

    if (results.length > 0) {
      return res.status(400).json({ error: 'El correo electrónico ya está en uso' });
    }

    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
      if (err) {
        console.error('Error al hashear la contraseña:', err);
        return res.status(500).send('Error interno del servidor');
      }

      connection.query('INSERT INTO users (username, email, password, rol) VALUES (?, ?, ?, ?)', [username, email, hashedPassword, rol], (err, results) => {
        if (err) {
          console.error('Error al realizar la consulta INSERT:', err);
          return res.status(500).send('Error interno del servidor');
        }

        res.status(201).json({ message: 'Usuario registrado con éxito' });
      });
    });
  });
});

app.post('/information', (req, res) => {
  const { nombre, apellido, telefono, direccion, ciudad, pais, fechaNacimiento, genero } = req.body;

  if (!nombre || !apellido || !telefono || !direccion || !ciudad || !pais || !fechaNacimiento || !genero) {
    return res.status(400).json({ error: 'Todos los campos son requeridos.' });
  }

  connection.query('INSERT INTO information (nombre, apellido, telefono, direccion, ciudad, pais, fechaNacimiento, genero) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellido, telefono, direccion, ciudad, pais, fechaNacimiento, genero], (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta INSERT:', err);
      return res.status(500).send('Error interno del servidor');
    }

    res.status(201).json({ message: 'Información guardada con éxito' });
  });
});

app.get('/api/user', (req, res) => {
  if (req.session.user) {
    res.send({ user: req.session.user });
  } else {
    res.status(401).send({ error: 'No autorizado' });
  }
});

app.post('/logout', (req, res) => {
  if (req.session) {
    // destruye la sesión
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send('Error interno del servidor');
      }

      // borra la cookie de sesión
      res.clearCookie('connect.sid');
      return res.send({ message: 'Sesión cerrada exitosamente' });
    });
  } else {
    return res.status(400).send({ error: 'No se encontró la sesión' });
  }
});

app.listen(3001, () => {
  console.log('Servidor escuchando en el puerto 3001');
});