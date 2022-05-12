export class ListObject {
  static count = 0;

  title: string;
  done: boolean;
  id: number;

  constructor(task: string) {
    this.title = task;
    this.done = false;
    this.id = ++ListObject.count;
  }
}
