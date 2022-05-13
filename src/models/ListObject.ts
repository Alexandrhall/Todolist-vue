export class ListObject {
  title: string;
  done: boolean;
  id: number;
  date: string;

  constructor(task: string) {
    const date: string = new Date().toISOString();
    this.title = task;
    this.done = false;
    this.id = Math.floor(Math.random() * 1000000);
    this.date = date;
  }
}
