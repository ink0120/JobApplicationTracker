import TopBar from './TopBar.jsx'
function Register() {
    return (
        <>
        <TopBar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <form className="space-y-6">
                    <fieldset className="space-y-5">
                        <legend className="text-2xl font-semibold text-gray-900 mb-2">
                            Join Today
                        </legend>

                        <div className="space-y-1.5">
                            <label
                                htmlFor="id_username"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="id_username"
                                required
                                className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label
                                htmlFor="id_email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="id_email"
                                required
                                className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label
                                htmlFor="id_password1"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password1"
                                id="id_password1"
                                required
                                className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label
                                htmlFor="id_password2"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="password2"
                                id="id_password2"
                                required
                                className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            />
                        </div>
                    </fieldset>

                    <div>
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-indigo-600 text-white font-semibold py-2.5 hover:bg-indigo-700 active:bg-indigo-800 transition-colors"
                        >
                            SIGN UP
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center">
                    <small className="text-sm text-gray-500">
                        Already have an account?{" "}
                        <a
                            href="/login"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Sign in
                        </a>
                    </small>
                </div>
            </div>
        </div>
    </>
    )
}

export default Register;