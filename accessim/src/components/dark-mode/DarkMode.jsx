import React,{useState, useEffect} from "react";

const DarkMode = () => {
    const [theme, setTheme] = useState( 'light')
    const element = document.documentElement

    useEffect(() => {
        switch (theme) {
            case 'light':
                element.classList.remove('dark')
                break;
            case 'dark':
                element.classList.add('dark')
                break;
            default:
                break;
        }
    }, [element.classList, theme]);

    const handleChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        //Cambiar icono del sol por el de la luna
        const icon = document.querySelector('ion-icon')
        if (theme === 'dark') {
            icon.name = 'sunny'
        }
        else {
            icon.name = 'moon'
        }

    }

    return (
        <>
            <div className='h-10 w-10'>
                <button
                    onClick = {handleChange}
                    className = 'hover:rounded-3xl hover:bg-slate-200 dark:hover:bg-slate-400 w-8 h-8 leading-9 text-xl rounded-full m-1 text-sky-600 dark:text-yellow-500 '>
                    <ion-icon name='sunny'></ion-icon>
                </button>
            </div>
        </>
    );
}
export default DarkMode;