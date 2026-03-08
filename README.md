# Task Management System (NestJS API)

## 1. Application Topic
The application is a server-side CRUD API created with **NestJS** and **TypeORM**. It provides a complete set of endpoints for managing tasks. It utilizes a **PostgreSQL** database running in a Docker container for data persistence.

**Main Functionalities:**
* Accepting task creation requests.
* Retrieving lists of all tasks or single tasks by ID.
* Updating task details and completion status.
* Deleting tasks from the database.
* Automated database connection and synchronization via TypeORM.

---

## 2. Domain Model and Business Rules

### Main Entities (Model)
1.  **CreateTaskDto (Request):** Input object used for creating a new task, containing:
    * `title` (String) - the title of the task.
    * `description` (String) - detailed description of the task.

2.  **Task (Entity / Offer):** Database entity and output object containing:
    * `id` (int) - unique identifier, auto-generated Primary Column.
    * `title` (String) - the title of the task.
    * `description` (String) - detailed description of the task.
    * `isCompleted` (boolean) - flag indicating whether the task is done.

### Business Rules & Configuration
* **Database Configuration:** The application expects a PostgreSQL database named `nest_crud_db` with user `postgres` and password `haslo` running on port `5432`.
* **Task Defaults:** When a new task is created, its `isCompleted` status is automatically set to `false` by default.
* **Updates:** The update functionality (`UpdateTaskDto`) allows for partial updates. You can modify just the `title`, `description`, or toggle the `isCompleted` status without sending the entire object payload.

---

## 3. WebAPI - Documentation

### Endpoint List

| Method | Endpoint         | Description |
| :--- |:------------------| :--- |
| `POST` | `/tasks`      | Accepts `CreateTaskDto`, creates a new task in the database, and returns the `Task` entity. |
| `GET` | `/tasks`      | Returns a list of all saved tasks. |
| `GET` | `/tasks/{id}` | Retrieves details of a specific task by its numeric ID. |
| `PATCH` | `/tasks/{id}` | Updates an existing task with new parameters (e.g., marking it as completed). |
| `DELETE` | `/tasks/{id}` | Removes a task from the system based on its ID. |

### Sample Input Data (JSON for POST)
```json
{
  "title": "Join Solvro",
  "description": "Learn every framework, programming language and basically everything"
}