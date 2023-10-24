export const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen dark:bg-purple-950 bg-white text-gray-300 flex-col gap-6 justify-center px-6 py-12 lg:px-8">
      <div className="flex flex-col gap-4 p-4 border shadow-sm border-purple-700 dark:bg-purple-700 bg-white hover:border-purple-600 duration-300 rounded-xl sm:mx-auto sm:w-full sm:max-w-sm">
        {children}
      </div>
    </div>
  );
};
