import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; 2024 Photo Uploader. All rights reserved.</p>
        <p>
          Made with ❤️ by 
          <a href="https://yourwebsite.com" className="text-blue-500 hover:underline ml-1">
            Your Name
          </a>
        </p>
        <p>
          <a href="/terms" className="text-gray-400 hover:text-white mr-4">
            Terms of Service
          </a>
          <a href="/privacy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
