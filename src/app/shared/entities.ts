export interface Tarea {
  id: string;
  image: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface ToastInfo {
  header?: string;
  body: string;
  delay?: number;
  classname?: string;
}