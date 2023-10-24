import React from 'react'

function HeroAnimation() {
  return (
    <div>
         <div>
        <div className="e_container">
          <div className="e_card">
            <h1 className='text-blue-400'>
              Ecommerce is:
              <div className="scroller">
                <span>
                  <span className="word logi">Logistics</span>
                  <br />
                  <span className="word tech">Technology</span>
                  <br />
                  <span className="word mark">Marketing</span>
                </span>
              </div>
              <div className="note"></div>
              <div>
                <p className="grow-text">GROW Products &amp; Services</p>
              </div>
            </h1>
          </div>
          <div className="circle-container">
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="140"
                cy="230"
                r="100"
                className="fill-yellow"
              />
              <circle
                cx="260"
                cy="230"
                r="100"
                className="fill-orange"
              />
              <circle
                cx="200"
                cy="140"
                r="100"
                className="fill-blue"
              />
            </svg>
          </div>
        </div>
      </div>
      <style>
        {`
          .main_container {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: "Montserrat", Arial;
            height: 500px;
            overflow: hidden;
          }

          .main_container h1 {
            font-weight: normal;
            font-size: 1.5em;
          }

          .e_container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 800px;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .e_card {
            font-size: 1.5em;
            text-align: justify;
            background-color: #f8f8f8;
            border-radius: 1.5em;
            padding: 2.6em 3.8em;
            cursor: pointer;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1),
              0 8px 8px rgba(0, 0, 0, 0.1),
              0 16px 16px rgba(0, 0, 0, 0.1),
              0 32px 32px rgba(0, 0, 0, 0.15),
              0 64px 64px rgba(0, 0, 0, 0.15);
          }

          .scroller {
            height: 1.4em;
            line-height: 1.3em;
            position: relative;
            overflow: hidden;
            width: 6em;
            margin-top: 20px;
          }

          .scroller > span {
            position: absolute;
            top: 0;
            animation: slide 6s infinite;
            font-weight: bold;
          }

          .note::after {
            content: '';
            width: 50%;
            height: 2px;
            border-radius: 999px;
            background-color: #932da9;
            position: absolute;
            top: -1.8em;
          }

          .note {
            color: #9f20b5;
            position: relative;
            margin-top: 3em;
          }

          .word.tech {
            color: #E2DF26;
          }

          .word.mark {
            color: #FE9A09;
          }

          .word.logi {
            color: #1E90FF;
          }

          .circle-container {
            gap: 2rem;
            animation-name: rotateClockwise;
            animation-duration: 6s;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }

          @keyframes rotateClockwise {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes slide {
            0% {
              top: 0;
            }
            25% {
              top: -0.2em;
            }
            50% {
              top: -1.6em;
            }
            80% {
              top: -2.5em;
            }
          }

          .main_container p {
            font-size: 1em;
            overflow: hidden;
            white-space: nowrap;
            margin: 0 auto;
            border-right: 0.15em solid #6a329f;
            animation: typing 4s steps(20) 1s 1 normal both, blink 1s steps(1)
              infinite;
          }

          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }

          @keyframes blink {
            50% {
              border-color: transparent;
            }
          }

          @media (min-width: 768px) and (max-width: 1200px) {
            .e_container {
              position: absolute;
            }
          }

          @media (max-width: 768px) {
            .circle-container {
              position: absolute;
              transform: translate(-50%, -50%);
            }

            .e_card {
              visibility: hidden;
            }

            .grow-text {
              visibility: hidden;
            }
          }

          .fill-yellow {
            fill: rgba(255, 193, 7, 0.8);
          }

          .fill-orange {
            fill: rgba(255, 87, 34, 0.8);
          }

          .fill-blue {
            fill: rgba(33, 150, 243, 0.8);
          }
        `}
      </style>
    </div>
  )
}

export default HeroAnimation