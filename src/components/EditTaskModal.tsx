"use client";

import { Modal } from "@/components";
import { SubmitHandler, useForm } from "react-hook-form";
import { Task } from "@/interfaces";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

type TaskModify = Omit<Task, "id">;

const EditTaskModal = ({ isOpen, handleClose }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TaskModify>();
  const onSubmit: SubmitHandler<TaskModify> = (data) => console.log(data);

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
        className="input self-stretch"
        placeholder="توضیحات"
        {...register("description")}
      />
    </Modal>
  );
};

export default EditTaskModal;
