const NavTaiwind = () => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex items-center justify-start">
                        <div className="flex-shrink-0">
                            <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
                        </div>
                        <div className="hidden md:block">
                            <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                            <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                            <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="m1-4 flext items-center md:ml-6">
                        <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outlinenone foucs:ring-2 foucus:ring-offset-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" xmlns="http://ww.w3.lrg/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                </svg>
                        </button>
                        <div className="max-w-xs bg-gray-800 rounded-full flex-item">

                        </div>


                    </div>
                    
                </div>

            </div>
        </nav>
    )
}