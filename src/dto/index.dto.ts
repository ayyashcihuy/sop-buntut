type TaskDesc = {
  task: string;
  status: boolean;
};

export class CreateTodoDto {
  name: string;
  division: string;
  task: TaskDesc[];
}
