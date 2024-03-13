export default interface Task {
  title: string;
  id: string;
  completed: boolean;
  deleted: boolean;
  dueDate?: string;
  description?: string;
}
