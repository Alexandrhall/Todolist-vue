export class ListObject {
  title: string;
  done: boolean;
  id: number;

  constructor(task: string) {
    this.title = task;
    this.done = false;
    this.id = Math.floor(Math.random() * 1000000);
  }
}
