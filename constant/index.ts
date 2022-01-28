export enum todoCategory {
  green = "Green",
  red = "Red",
  blue = "Blue"
}

export const todoCategoryArr = Object.values(todoCategory)

export enum todoItemAction {
  edit = 'Edit',
  delete = 'Delete',
  completed = 'Completed'
}

export const todoItemActionArray = [
  // {
  //   name: todoItemAction.edit,
  //   color: "info"
  // },
  {
    name: todoItemAction.delete,
    color: "danger"
  },
  {
    name: todoItemAction.completed,
    color: "secondary"
  }
]

