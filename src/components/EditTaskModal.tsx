"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { CheckIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useQueryClient } from "@tanstack/react-query";

import { Task } from "@/interfaces";
import { Button, Modal } from "@/components";
import {
  useCompleteTask,
  useDeleteTask,
  useUnCompleteTask,
  useUpdateTask,
} from "@/api/hooks";
import toast from "react-hot-toast";

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
    getValues,
    formState: { errors },
  } = useForm<TaskModify>({ defaultValues: { title: task.title } });
  const updateTask = useUpdateTask();
  const deleteTask = useDeleteTask();
  const completeTask = useCompleteTask();
  const unCompleteTask = useUnCompleteTask();
  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<TaskModify> = async (data) => {
    try {
      await updateTask.mutateAsync({ taskId: data._id, task: data });
      toast.success("تسک با موفقیت ویرایش شد.");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      handleClose();
    } catch (error) {
      toast.error("مشکلی پیش آمده. مجددا تلاش کنید.");
    }
  };

  const handleComplete = async () => {
    try {
      if (task.completed) {
        await unCompleteTask.mutateAsync(task._id);
        toast.success("تسک با موفقیت از حالت تکمیل خارج شد.");
      } else {
        await completeTask.mutateAsync(task._id);
        toast.success("تسک با موفقیت تکمیل شد.");
      }
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      handleClose();
    } catch (error) {
      toast.error("مشکلی پیش آمده. مجددا تلاش کنید.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask.mutateAsync(task._id);
      toast.success("تسک به سطل آشغال اضافه شد.");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      handleClose();
    } catch (error) {
      toast.error("مشکلی پیش آمده. مجددا تلاش کنید.");
    }
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} title="ویرایش تسک">
      <form
        className="grid grid-cols-1 gap-4"
        onSubmit={handleSubmit(onSubmit)}
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
            <Button
              variant="outlined"
              color="danger"
              onClick={handleDelete}
              isLoading={deleteTask.isPending}
              type="button"
            >
              <span className="flex items-center gap-x-1">
                <TrashIcon className="text-red-700 w-4 h-4" />
                حذف
              </span>
            </Button>
            <Button
              variant="outlined"
              color="success"
              onClick={handleComplete}
              isLoading={completeTask.isPending}
              type="button"
            >
              <span className="flex items-center gap-x-1">
                <CheckIcon className="text-green-700 w-4 h-4" />
                {task.completed ? "عدم تکمیل" : "تکمیل"}
              </span>
            </Button>
          </div>
          <Button variant="contained" color="primary" type="submit">
            ویرایش
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditTaskModal;
