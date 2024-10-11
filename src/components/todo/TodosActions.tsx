"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Priority, SortBy } from "@/constants/todos";
import { useRouter } from "next/navigation";

export function TodosActions({ searchParams }: any) {
  const router = useRouter();

  const handleReset = () => {
    router.push("/todos");
  };

  return (
    <section className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 mb-8 transition-colors duration-300">
      <Card className="p-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            Todos Query
          </CardTitle>
        </CardHeader>
        <form>
          {/* Stack inputs vertically */}
          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-col">
              <Label
                htmlFor="due_date"
                className="text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                Due date
              </Label>
              <Input
                id="due_date"
                name="due_date"
                type="date"
                defaultValue={searchParams.due_date}
                className="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex flex-col">
              <Label
                htmlFor="priority"
                className="text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                Priority
              </Label>
              <Select
                defaultValue={searchParams.priority ?? Priority.P4}
                name="priority"
              >
                <SelectTrigger className="p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:text-white focus:ring-indigo-500 focus:border-indigo-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-700">
                  <SelectItem value={Priority.ANY}>ANY</SelectItem>
                  <SelectItem value={Priority.P1}>P1</SelectItem>
                  <SelectItem value={Priority.P2}>P2</SelectItem>
                  <SelectItem value={Priority.P3}>P3</SelectItem>
                  <SelectItem value={Priority.P4}>P4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col">
              <Label
                htmlFor="completed"
                className="text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                Completion status
              </Label>
              <Select
                defaultValue={searchParams.completed ?? "All"}
                name="completed"
              >
                <SelectTrigger className="p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:text-white focus:ring-indigo-500 focus:border-indigo-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-700">
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col">
              <Label
                htmlFor="sortBy"
                className="text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                Sort by
              </Label>
              <Select
                defaultValue={searchParams.sortBy?.toString() ?? SortBy.TITLE.toString()}
                name="sortBy"
              >
                <SelectTrigger className="p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:text-white focus:ring-indigo-500 focus:border-indigo-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-700">
                  <SelectItem value={SortBy.TITLE}>Title</SelectItem>
                  <SelectItem value={SortBy.PRIORITY}>Priority</SelectItem>
                  <SelectItem value={SortBy.DUE_DATE}>Due Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end mt-6 space-x-4">
            <Button
              type="button"
              onClick={handleReset}
              className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-400 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-600"
            >
              Reset
            </Button>
            <Button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Apply
            </Button>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}

export default TodosActions;
