import { TodosActions } from "@/components/todo/TodosActions";
import { TodosList } from "@/components/todo/todosList";
import Link from "next/link";

export default function Todos({ searchParams }: { searchParams: any }) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <TodosActions searchParams={searchParams} />
        <TodosList searchParams={searchParams} />
        <Link
          href="/todos/create"
          className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 ease-in-out transform hover:scale-105 mt-8 focus:outline-none focus:ring-4 focus:ring-purple-500"
        >
          Create a new todo
        </Link>
      </div>
    </section>
  );
}
