"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { CheckIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useQueryClient } from "@tanstack/react-query";

import { Task } from "@/interfaces";
import { Modal } from "@/components";
import { useDeleteTask, useUpdateTask } from "@/api/hooks";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
} & { task: Task };

type TaskModify = Omit<Task, "id">;

const EditTaskModal = ({ isOpen, handleClose, task }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<TaskModify>({ defaultValues: { title: task.title } });
  const updateTask = useUpdateTask();
  const deleteTask = useDeleteTask();
  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<TaskModify> = (data) => console.log(data);

  const handleComplete = async () => {
    // TODO: Handle errors
    await updateTask.mutateAsync({
      task: { completed: true },
      taskId: task._id,
    });
    queryClient.invalidateQueries({ queryKey: ["tasks"] });
    // TODO: show toast
    handleClose();
  };

  const handleDelete = async () => {
    // TODO: Handle errors
    await deleteTask.mutateAsync(task._id);
    queryClient.invalidateQueries({ queryKey: ["tasks"] });
    // TODO: show toast
    handleClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      className="grid grid-cols-1 gap-4"
      title="ویرایش تسک"
    >
      <input
        type="text"
        placeholder="عنوان"
        {...register("title")}
        className="input"
      />
      <input
        className="input"
        type="text"
        placeholder="سررسید"
        {...register("dueDate")}
      />
      <textarea
        className="input self-stretch resize-none"
        placeholder="توضیحات"
        {...register("description")}
      />
      <div className="flex justify-between">
        <div className="flex gap-x-2 items-center">
          <button
            onClick={handleDelete}
            className="flex items-center gap-x-1 btn-danger-outline"
          >
            <TrashIcon className="text-red-700 w-4 h-4" />
            <div className="text-red-700 ">حذف</div>
          </button>
          <button
            onClick={handleComplete}
            className="flex items-center gap-x-1 btn-success-outline"
          >
            <CheckIcon className="text-green-700 w-4 h-4" />
            <div className="text-green-700 ">تکمیل</div>
          </button>
        </div>
        <button className="btn-primary-solid">ویرایش</button>
      </div>
    </Modal>
  );
};

export default EditTaskModal;
