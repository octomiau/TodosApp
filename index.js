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
    const [value, setValue]= React.useState('');
    const handleSubmit= e => {
        e.preventDefault();
        if(!value) return;
        const newTodos = [...todos, {text:value, is complited:false}]
        setTodos(newTodos);
        setValue('');
    }
    return (<>
        {todos.map((todo,i) => 
        <div classname="todo" key={i}> {todo.text}</div>)}
        <formonDubmit={handleSubmit}>
            <input
            type="text"
            className="input"
            value={value}
            placeholder="Add Todo ..."
            onChange={e=> setValue(e.target.value)}
            />
        </form>
    </>);
}

ReactDOM.render(
    <App/>
    document.getElementById('root')
)
