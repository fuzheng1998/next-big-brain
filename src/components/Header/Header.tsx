interface HeaderProps {
    isAuthenticated: boolean;
  }
  /**
   * @description The header component displays the header of the website.
   * 
   * It contains the name of the website and the login and sign up buttons.
   * 
   * while not authenticated, display login and sign up buttons
   * while authenticated, display logout button, and user profile button
   */
  
  function Header({ isAuthenticated = false }: HeaderProps) {
    return (
      <header className="flex justify-between px-3 py-2 shadow">
        <h1 className="text-[#1368CE] text-2xl italic font-bold">Big Brain</h1>
        {isAuthenticated ? (
          <div>
            <button type="button" className="hover:underline bg-white text-zinc-800 rounded-md px-4 py-2 font-semibold">
              Logout
            </button>
            <button type="button" className="hover:underline bg-white text-zinc-800 rounded-md px-4 py-2 font-semibold">
              Profile
            </button>
          </div>
        ) : (
          <div>
            <button className="hover:underline bg-white text-zinc-800 rounded-md px-4 py-2 font-semibold" type="button">
              Login
            </button>
            <button className="hover:underline bg-white text-zinc-800 rounded-md px-4 py-2 font-semibold" type="button">
              Sign
              Up
            </button>
          </div>
        )}
  
      </header>
    );
  }
  export default Header;
  