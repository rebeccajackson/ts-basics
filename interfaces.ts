
interface Todo{
  title: string;
  text: string;
}

function showTodo(todo: Todo){
  console.log(todo.title+': ' + todo.text)
}

let myTodo = {title: 'Rubbish', text: 'Take out rubbish'}

showTodo(myTodo)