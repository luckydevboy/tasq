export default interface Task {
  title: string;
  _id: string;
  completed: boolean;
  deleted: boolean;
  dueDate?: string;
  description?: string;
}
