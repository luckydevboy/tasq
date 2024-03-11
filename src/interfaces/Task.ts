export default interface Task {
  title: string;
  id: string;
  completed: boolean;
  dueDate?: string;
  description?: string;
}
