const { useDebugValue } = require("react");

function App(){
    const [todos, setTodos] =React.useState([
        {
            text: 'learn react',
            isCompleted: false,
        },
        {
            text: 'learn react',
            isCompleted: false,
        },
        {
            text: 'learn react',
            isCompleted: false,
        }
    ]);
    
    const addTodo = text =>{
        const newTodos = [...todos, {text:text, isCompleted:false}];
        setTodos(newTodos);
    }
  

    const removeTodo = e =>{
        const index = Number(e.target.id);
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }
    return (<>
        {todos.map((todo,i) => 
        <div classname="todo" key={i} onClick={removeTodo}> {todo.text}</div>)}
       <TodoForm addTodo={addTodo}/>
    </>);
}

ReactDOM.render(
    <App/>
    document.getElementById('root')
)
