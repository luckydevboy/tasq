"use client";

import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { CheckIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Drawer from "react-modern-drawer";
import { useMediaQuery } from "react-responsive";
import { DatePicker } from "zaman";
import resolveConfig from "tailwindcss/resolveConfig";

import { Task } from "@/interfaces";
import { Button, Modal } from "@/components";
import {
  useCompleteTask,
  useDeleteTask,
  useUnCompleteTask,
  useUpdateTask,
} from "@/api/hooks";
import tailwindConfig from "../../tailwind.config";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
} & { task: Task };

type TaskModify = Omit<Task, "id">;

const EditTaskModal = ({ isOpen, handleClose, task }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TaskModify>({ defaultValues: task });
  const updateTask = useUpdateTask();
  const deleteTask = useDeleteTask();
  const completeTask = useCompleteTask();
  const unCompleteTask = useUnCompleteTask();
  const queryClient = useQueryClient();

  const fullConfig = resolveConfig(tailwindConfig);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  const onSubmit: SubmitHandler<TaskModify> = async (data) => {
    try {
      await updateTask.mutateAsync({ taskId: task._id, task: data });
      toast.success("تسک با موفقیت ویرایش شد.");
      await queryClient.invalidateQueries({ queryKey: ["tasks"] });
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
      await queryClient.invalidateQueries({ queryKey: ["tasks"] });
      handleClose();
    } catch (error) {
      toast.error("مشکلی پیش آمده. مجددا تلاش کنید.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask.mutateAsync(task._id);
      toast.success("تسک به سطل آشغال اضافه شد.");
      await queryClient.invalidateQueries({ queryKey: ["tasks"] });
      handleClose();
    } catch (error) {
      toast.error("مشکلی پیش آمده. مجددا تلاش کنید.");
    }
  };

  const renderForm = () => (
    <form
      className="grid grid-cols-1 gap-4 p-4 lg:p-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <input
          type="text"
          placeholder="عنوان"
          {...register("title", { required: "عنوان اجباری است!" })}
          className="input"
        />
        {errors.title && (
          <small className="text-red-500">{errors.title.message}</small>
        )}
      </div>
      <div>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              accentColor={fullConfig.theme.colors.blue["700"]}
              inputClass="input"
              round="x1"
              className="z-10"
              inputAttributes={{ placeholder: "سررسید" }}
              onChange={(e) => onChange(e.value)}
              defaultValue={value}
            />
          )}
          name="dueDate"
        />
      </div>
      <textarea
        className="input self-stretch resize-none"
        placeholder="توضیحات"
        {...register("description")}
      />
      <div className="flex justify-between mt-auto">
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          isLoading={updateTask.isPending}
        >
          ویرایش
        </Button>
      </div>
    </form>
  );

  return (
    <>
      {isDesktop ? (
        <Modal isOpen={isOpen} handleClose={handleClose} title="ویرایش تسک">
          {renderForm()}
        </Modal>
      ) : (
        <Drawer
          open={isOpen}
          onClose={handleClose}
          direction="bottom"
          size={290}
          className="rounded-t-lg"
        >
          {renderForm()}
        </Drawer>
      )}
    </>
  );
};

export default EditTaskModal;
