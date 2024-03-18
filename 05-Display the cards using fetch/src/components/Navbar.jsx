import React from 'react';

const Navbar = () => {
  return (
    <>
    <nav class="bg-gray-800 p-4 mb-2">
  <div class="max-w-7xl mx-auto">
    <div class="flex justify-between">
      <div class="flex space-x-4">
        {/* <!-- Logo --> */}
        <div class="flex-shrink-0 text-white">
        <img src={"https://wallpapercave.com/wp/wp9109485.jpg"} width={28} height={25} alt={"card"} />
        </div>
        {/* <!-- Navigation Links --> */}
        <div class="hidden md:flex space-x-4">
          <a href="#" class="text-white hover:text-gray-300">Home</a>
          <a href="#" class="text-white hover:text-gray-300">About</a>
          <a href="#" class="text-white hover:text-gray-300">Services</a>
          <a href="#" class="text-white hover:text-gray-300">Contact</a>
        </div>
      </div>
      {/* <!-- Mobile Menu Button (Hidden on Desktop) --> */}
      <div class="flex md:hidden">
        <button class="text-white hover:text-gray-300 focus:outline-none">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>
</>
  );
}

export default Navbar;
