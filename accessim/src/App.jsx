import './App.css';
import DarkMode from './components/dark-mode/DarkMode';

function App() {
  return (
    <div className='dark:bg-slate-900 min-h-screen min-w-full'>
    <nav className='font-sans flex flex-col text-center sm:flex-row bg-orange-200 sm:text-left sm:justify-between rounded-xl items-center shadow-[0px_6px_15px_#00000024] w-4/5 relative top-2 mx-auto h-12 dark:text-gray-900 dark:bg-slate-700'>
      <DarkMode />
      <div>
        
      </div>
    </nav>  
    </div>

  );
}

export default App;
