import React from 'react'

const Footer = () => {
return (
    <div>
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center py-6 mt-8">
        <div className="container mx-auto">
            <p className="text-sm text-gray-400">
                &copy; 2023 To-Do App. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center space-x-4">
                <a
                    href="#"
                    className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 transition duration-300 ease-in-out"
                >
                    Privacy Policy
                </a>
                <a
                    href="#"
                    className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 transition duration-300 ease-in-out"
                >
                    Terms of Service
                </a>
            </div>
        </div>
    </footer>
    </div>
)
}

export default Footer
