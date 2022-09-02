import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
<footer className="relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 -mt-px">
            
            {/* Footer illustration */}
            <div className="pointer-events-none -z-1" aria-hidden="true">
                <svg className="absolute bottom-0 left-0 transform -translate-x-1/2 ml-24 dark:opacity-40" width="800" height="264" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="400" cy="400" r="400" fill="url(#footerglow_paint0_radial)" fillOpacity=".4" />
                    <defs>
                        <radialGradient id="footerglow_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 0 400) scale(315.089)">
                            <stop stopColor="#3ABAB4" />
                            <stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>

            {/* Top area: Blocks */}
            <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

                {/* 1st block */}
                <div className="md:col-span-2 lg:col-span-3">
                    {/* Logo */}
                    <Link className="inline-block" to="/" aria-label="Cruip">
                        <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="flogo_a">
                                    <stop stopColor="#3ABAB4" offset="0%" />
                                    <stop stopColor="#7F9CF5" offset="100%" />
                                </linearGradient>
                                <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="flogo_b">
                                    <stop stopColor="#3ABAB4" offset="0%" />
                                    <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                                </linearGradient>
                            </defs>
                            <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#flogo_a)" />
                            <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#flogo_b)" />
                        </svg>
                    </Link>
                </div>
                
                {/* 2nd, 3rd, 4th and 5th blocks */}
                <div className="md:col-span-10 lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">

                    {/* 2nd block */}
                    <div className="text-sm">
                        <h6 className="font-medium uppercase mb-2">Products</h6>
                        <ul>
                            <li className="mb-1">
                                <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Drag And Drop</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Visual Studio X</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Easy Content</Link>
                            </li>
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className="text-sm">
                        <h6 className="font-medium uppercase mb-2">Resources</h6>
                        <ul>
                            <li className="mb-1">
                                <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Industries and tools</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Use cases</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Blog</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Online events</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Nostrud exercitation</Link>
                            </li>
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="text-sm">
                        <h6 className="font-medium uppercase mb-2">Company</h6>
                        <ul>
                            <li className="mb-1">
                                <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Diversity & inclusion</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">About us</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Press</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Customer stories</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Online communities</Link>
                            </li>
                        </ul>
                    </div>

                    {/* 5th block */}
                    <div className="text-sm">
                        <h6 className="font-medium uppercase mb-2">Support</h6>
                        <ul>
                            <li className="mb-1">
                                <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Documentation</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Tutorials & guides</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Webinars</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Open-source</Link>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

            {/* Bottom area */}
            <div className="md:flex md:items-center md:justify-between">

                {/* Social links */}
                <ul className="flex mb-4 md:order-2 md:ml-4 md:mb-0">
                    <li>
                        <a className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out" href="#0" aria-label="Twitter">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                            </svg>
                        </a>
                    </li>
                    <li className="ml-4">
                        <a className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out" href="#0" aria-label="Github">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                            </svg>
                        </a>
                    </li>
                    <li className="ml-4">
                        <a className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out" href="#0" aria-label="Facebook">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                            </svg>
                        </a>
                    </li>
                    <li className="ml-4">
                        <a className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out" href="#0" aria-label="Instagram">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20.145" cy="11.892" r="1" />
                                <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                                <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                            </svg>
                        </a>
                    </li>
                    <li className="ml-4">
                        <a className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out" href="#0" aria-label="Linkedin">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                            </svg>
                        </a>
                    </li>
                </ul>

                {/* Middle links */}
                <div className="text-sm md:order-1 text-gray-700 mb-2 md:mb-0">
                    <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Terms</Link> · <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Privacy Policy</Link>
                </div>

                {/* Copyrights note */}
                <div className="text-gray-600 dark:text-gray-400 text-sm mr-4">&copy; Cruip.com. All rights reserved.</div>

            </div>

        </div>
    </div>
</footer>
  );
}

export default Footer;
