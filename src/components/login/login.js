import { useContext } from "react";
import ThemeContext from "../ThemeContext";

const Login = () => {
    const { isDarkTheme } = useContext(ThemeContext);
    return (
        <div className={`flex flex-row  w-full md:w-8/12 xl:w-4/12 h-def mx-auto my-6 justify-center rounded-lg ${isDarkTheme ? "bg-black-200" : "bg-white-mode-300"
            }`}>
            <a href='http://localhost:3000/auth/github'>
                <button
                    className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-3 px-16 mt-32 rounded-lg shadow-md shadow-teal-400'
                >
                    LOGIN WITH GITHUB
                </button>
            </a>
        </div>
    )
}

export default Login;
