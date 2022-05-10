export class ListObject {
  title: string;
  done: boolean;

  constructor(task: string) {
    this.title = task;
    this.done = false;
  }
}
