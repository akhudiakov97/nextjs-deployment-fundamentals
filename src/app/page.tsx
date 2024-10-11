import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
          Welcome to Lectrum Todo List
        </h1>
        <div className="flex flex-col space-y-4">
          <Link
            href="/todos"
            className="text-lg font-semibold text-white px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Go to Todo List
          </Link>
          <Link
            href="/auth/signup"
            className="text-lg font-semibold text-white px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-orange-500 hover:to-pink-500 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Sign Up
          </Link>
          <Link
            href="/auth/signin"
            className="text-lg font-semibold text-white px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-500 hover:to-green-500 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Sign In
          </Link>
          <Link
            href="/auth/confirm"
            className="text-lg font-semibold text-white px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Confirm Email
          </Link>
        </div>
      </div>
    </main>
  );
}