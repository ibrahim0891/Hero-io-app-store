import React from "react";

const Button = ({ children , className }) => {
    return (
        <button
            className={`${className} bg-gradient-to-bl from-indigo-500 to-purple-500 text-white px-6 py-2 sm:py-3 rounded-md active:scale-90 transition-all cursor-pointer`}
        >
            {children}
        </button>
    );
};

export default Button;
