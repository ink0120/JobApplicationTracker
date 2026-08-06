

function Tracker() {

  return (

    <>
        <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-6">

                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900">
                            Job Applications for USER
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">Email: EMAIL PLACEHOLDER</p>
                    </div>
                    <p className="text-sm text-gray-500">You're logged in.</p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-4">
                    <p className="text-sm text-gray-400">There will be a search bar here.</p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-4 py-3 font-medium text-gray-600">Company</th>
                                <th className="px-4 py-3 font-medium text-gray-600">Job Title</th>
                                <th className="px-4 py-3 font-medium text-gray-600">Salary</th>
                                <th className="px-4 py-3 font-medium text-gray-600">Date Applied</th>
                                <th className="px-4 py-3 font-medium text-gray-600">Status</th>
                                <th className="px-4 py-3 font-medium text-gray-600">Contact</th>
                                <th className="px-4 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr>
                                <td colSpan="7" className="px-4 py-8 text-center text-gray-500">
                                    No job applications yet —{" "}
                                    <a href="/add" className="text-indigo-600 font-medium hover:text-indigo-500">
                                        Add one to get started
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                        <a
                            href="/add"
                            className="inline-flex items-center rounded-lg bg-indigo-600 text-white text-sm font-semibold px-4 py-2.5 hover:bg-indigo-700 active:bg-indigo-800 transition-colors"
                        >
                            Add Listing
                        </a>
                        <button className="inline-flex items-center rounded-lg border border-gray-300 text-gray-700 text-sm font-semibold px-4 py-2.5 hover:bg-gray-50 transition-colors">
                            Export
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        <form method="POST" action="/logout">
                            <button
                                type="submit"
                                className="text-sm font-medium text-gray-600 hover:text-gray-900"
                            >
                                Log out
                            </button>
                        </form>
                        <a href="/login" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Tracker;