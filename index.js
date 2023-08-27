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
    return (<>
        {todos.map((todo,i) => <div key={i}> {todo.text}</div>)}
    </>);
}

ReactDOM.render(
    <App/>
    document.getElementById('root')
)
