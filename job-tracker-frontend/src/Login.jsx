import TopBar from './TopBar.jsx'

function Login(){
    return(
        <>
        <TopBar />
        <div class="70%-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <div class="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <form class="space-y-6">
                    <fieldset class="space-y-5">
                        <legend class="text-2xl font-semibold text-gray-900 mb-2">
                            Login bro
                        </legend>

                        <div class="space-y-1.5">
                            <label for="id_username" class="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="id_username"
                                required
                                class="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                           / >
                        </div>

                        <div class="space-y-1.5">
                            <label for="id_email" class="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="id_email"
                                required
                                class="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            />
                        </div>

                        <div class="space-y-1.5">
                            <label for="id_password" class="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="id_password"
                                required
                                class="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                           / >
                        </div>
                    </fieldset>

                    <div>
                        <button
                            type="submit"
                            class="w-full rounded-lg bg-indigo-600 text-white font-semibold py-2.5 hover:bg-indigo-700 active:bg-indigo-800 transition-colors"
                        >
                            Log in
                        </button>
                    </div>
                </form>

                <div class="mt-6 text-center">
                    <small class="text-sm text-gray-500">
                        No account? <a href="/register" class="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a>
                    </small>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;