function HeaderNav() {
    return (
        <div>

            <nav
                className=" fixed w-full z-20 top-0   border-b border-red-200 bg-gray-400">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center gap-4">
                        <img src="https://i.ibb.co/XSDsCvw/Whats-App-Image-2024-01-11-at-9-31-50-PM-removebg-preview-removebg-preview.jpg" alt="Qasem"
                             className="relative inline-block object-cover object-center w-12 h-12 rounded-lg p-0.3"/>
                        <div>
                            <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
                                Qasem Mohammad
                            </h6>
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                                Web Developer
                            </p>
                        </div>
                    </div>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                        <button data-collapse-toggle="navbar-sticky" type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>

                </div>
            </nav>

        </div>
    );
}

export default HeaderNav;