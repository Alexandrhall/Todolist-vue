export class ListObject {
  title: string;
  done: boolean;
  id: number;
  date: number;

  constructor(task: string) {
    const date: number = Date.now();
    this.title = task;
    this.done = false;
    this.id = Math.floor(Math.random() * 1000000);
    this.date = date;
  }
}
