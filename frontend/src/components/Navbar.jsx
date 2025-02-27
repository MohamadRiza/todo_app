// src/components/Navbar.jsx
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    To-Do App
                </h1>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <a
                            href="/"
                            className="hover:bg-gradient-to-r from-blue-400 to-purple-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-110 px-3 py-2 rounded"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className="hover:bg-gradient-to-r from-blue-400 to-purple-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-110 px-3 py-2 rounded"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/todos"
                            className="hover:bg-gradient-to-r from-blue-400 to-purple-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-110 px-3 py-2 rounded"
                        >
                            To-Dos
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <ul className="md:hidden flex flex-col space-y-4 mt-4">
                    <li>
                        <a
                            href="/"
                            className="hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-110 px-3 py-2 rounded"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className="hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-110 px-3 py-2 rounded"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/todos"
                            className="hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-110 px-3 py-2 rounded"
                        >
                            To-Dos
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
}