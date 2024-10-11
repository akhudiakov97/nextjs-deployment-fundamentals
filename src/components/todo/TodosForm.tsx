"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Todo } from "@/types/todo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import addTodo from "@/app/todos/actions/addTodo";
import updateTodo from "@/app/todos/actions/updateTodo";
import { Priority } from "@/constants/todos";

type Props = {
  isUpdateTodo?: boolean;
  todo?: Todo;
};

export const TodosForm: React.FC<Props> = ({ todo, isUpdateTodo = false }) => {
  return (
    <form
      action={isUpdateTodo ? updateTodo : addTodo}
      className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-colors duration-300"
    >
      <input type="hidden" name="id" value={todo?.id} />

      {/* Title Input */}
      <div className="mb-6">
        <Label
          htmlFor="title"
          className="block text-lg font-medium text-gray-700 dark:text-gray-300"
        >
          Title
        </Label>
        <Input
          id="title"
          name="title"
          defaultValue={todo?.title}
          required
          className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>

      {/* Description Input */}
      <div className="mb-6">
        <Label
          htmlFor="description"
          className="block text-lg font-medium text-gray-700 dark:text-gray-300"
        >
          Description
        </Label>
        <Textarea
          id="description"
          name="description"
          defaultValue={todo?.description}
          required
          className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>

      {/* Due Date Input */}
      <div className="mb-6">
        <Label
          htmlFor="due_date"
          className="block text-lg font-medium text-gray-700 dark:text-gray-300"
        >
          Due Date
        </Label>
        <Input
          id="due_date"
          name="due_date"
          type="date"
          defaultValue={todo?.due_date}
          required
          className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>

      {/* Priority Selector */}
      <div className="mb-6">
        <Label
          htmlFor="priority"
          className="block text-lg font-medium text-gray-700 dark:text-gray-300"
        >
          Priority
        </Label>
        <Select
          defaultValue={todo?.priority ?? Priority.ANY}
          name="priority"
          required
        >
          <SelectTrigger className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-gray-700 dark:text-white">
            <SelectItem value={Priority.P1}>P1</SelectItem>
            <SelectItem value={Priority.P2}>P2</SelectItem>
            <SelectItem value={Priority.P3}>P3</SelectItem>
            <SelectItem value={Priority.P4}>P4</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Is Completed Checkbox */}
      <div className="mb-6 flex items-center">
        <Checkbox
          id="completed"
          name="completed"
          defaultChecked={todo?.completed || false}
          className="mr-2 dark:bg-gray-900 dark:border-gray-600"
        />
        <Label
          htmlFor="completed"
          className="text-lg font-medium text-gray-700 dark:text-gray-300"
        >
          Is Completed
        </Label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {isUpdateTodo ? "Update" : "Add"}
      </Button>
    </form>
  );
};

export default TodosForm;
