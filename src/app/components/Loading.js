import React from "react";
import { motion } from "framer-motion";

const SplashScreen = () => {
    return (
        <div className="flex justify-center h-screen">
            <motion.img
                initial={{
                    y: -80,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                }}
                style={{ opacity: 0 }}
                onLoad={(e) => {
                    e.target.style.opacity = 1;
                }}
                src="/logo_loading.svg"
                alt="Logo"
            />
        </div>
    );
};

export default SplashScreen;
