"use client";
export default function Home() {
  return (
    <body className="bg-slate-200">
      <header className="bg-white px-6 shadow">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          <button
            className="-ml-1 p-1 rounded text-slate-500 transition-colors
           hover:bg-sky-600 hover:text-slate-100 focus:ring-2 focus:ring-slate-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex -mr-4 items-center">
            <a className=" text-sky-600 duration-100 hover:rotate-12" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                />
              </svg>
            </a>
            <div className="ml-8 space-x-8 hidden md:flex">
              <a className="px-3 py-2 text-sky-600 " href="#">
                Home
              </a>
              <a
                className="text-slate-600 px-3 py-2 hover:text-sky-600 transition-colors"
                href="#"
              >
                About
              </a>
              <a
                className="text-slate-600 px-3 py-2 hover:text-sky-600 transition-colors"
                href="#"
              >
                Blog
              </a>
              <a
                className="text-slate-600 px-3 py-2 hover:text-sky-600 transition-colors"
                href="#"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex">
            <button className="rounded-full text-slate-500 transition-colors hover:text-sky-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </button>
            <button className="ml-4">
              <img
                className="h-6 w-6 rounded-full"
                src="https://ui-avatars.com/api?name=Marlon+Sánchez"
                alt="Marlon Sánchez"
              ></img>
            </button>
          </div>
        </div>
        <div className="space-y-1 border-t pb-3 pt-2 md:hidden">
          <a
            href="#"
            className="block rounded-md px-3 py-2 bg-sky-600 text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-slate-700
             transition-colors hover:bg-sky-600 hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-slate-700
             transition-colors hover:bg-sky-600 hover:text-white"
          >
            Blog
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-slate-700
             transition-colors hover:bg-sky-600 hover:text-white"
          >
            Contact
          </a>
        </div>
      </header>
    </body>
  );
}
