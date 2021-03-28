import React,{useState} from 'react';
import Form from './Form';
import List from './List';
import shortid from 'shortid';
import Button from '@material-ui/core/Button';

const App = () => {
    const [todos,setTodos] = useState([ 
        {
            content: 'やることリストを作る'
        }

    ]);

    const addTodo = content => {
        setTodos([
            ...todos,
            {
                content: content,
                id: shortid.generate()
            }
        ])
    };

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return(
        <>
            <h1>やることリスト</h1>
            <Form addTodo={addTodo}/>
            <List todos={todos} deleteTodo={deleteTodo} />
            <Button variant="contained" color="primary">
                （仮）
            </Button>
        </>
    )
};

export default App;