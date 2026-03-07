import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {

  private tasks: Task[] = [];
  private idCounter: number = 1;

  create(createTaskDto: CreateTaskDto): Task {
    const newTask: Task = {
      id: this.idCounter++,
      title: createTaskDto.title,
      description: createTaskDto.description,
      isCompleted: false
    }
    this.tasks.push(newTask);
    return newTask;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number): Task {
    const task = this.tasks.find(t => t.id === id)
    if (!task) {
      throw new NotFoundException('Nie znaleziono zadanie o danym ID');
    }
    return task;
  }

  update(id: number, updateTaskDto: UpdateTaskDto): Task {
    const task = this.findOne(id);
    const updatedTask = {
      ...task, ...UpdateTaskDto
    }

    this.tasks = this.tasks.map(t => (t.id === id ? updatedTask : t));
    return updatedTask;
  }

  remove(id: number): void {
    const task = this.findOne(id);
    this.tasks = this.tasks.filter(t => t.id !== id)
  }
}
