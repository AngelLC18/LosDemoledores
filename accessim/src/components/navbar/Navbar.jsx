import React from 'react';
import DarkMode from '../dark-mode/DarkMode';

const Navbar = () => {
	return (
		<nav className='font-sans flex flex-col text-center sm:flex-row bg-orange-200 sm:text-left sm:justify-between rounded-xl items-center shadow-[0px_6px_15px_#00000024] w-4/5 relative top-2 mx-auto h-12 dark:text-gray-900 dark:bg-slate-700'>
			<DarkMode />
			<div></div>
		</nav>
	);
};

export default Navbar;
