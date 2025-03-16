import { useNavigate } from "react-router"
import { useUser } from "../context/UserContext"

export default function Login() {
    const {login} = useUser()
    const navigate = useNavigate()

    const formOnSubmit = (formData) => {
        const email = formData.get('email')
        const username = formData.get('username')
        const password = formData.get('password')

        if(email === '' || password === '' || username === '') return;

        login(username)
        navigate('/chat')
    }

    return (
        <main className="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
            <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
                <h1 className="text-4xl font-semibold">Welcome back.</h1>
            </div>
            <form action={formOnSubmit} className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
                <input
                    className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                    type="text"
                    placeholder="Username"
                    name="username"
                />
                <input
                    className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                    type="text"
                    placeholder="Email"
                    name="email"
                />
                <input
                    className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                <div className="flex items-center">
                    
                    <button
                        className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
                        type="submit"
                    >
                        Log In
                    </button>
                </div>
            </form>
        </main>

    );
}