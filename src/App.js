import React,{useState} from 'react';
import Form from './Form';
import List from './List';
import shortid from 'shortid';
import img from './img/dog.jpg';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route,Link } from 'react-router-dom';

const useStyles = makeStyles({
    title: {
        color: "#222222",
        textAlign: 'center',
    },
    form: {
        textAlign: 'center',
        float: 'center',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "600px",
        height: "500px",
        margin: "0 auto",
        backgroundColor: "#6699"
    },
    form2: {
        textAlign: 'center',
        flexDirection: "column",
        justifyContent: "space-between"
    },
    image: {
        width: '700px',
        height: '530px',
        backgroundImage: `url(${img})`
    }
})

const App = () => {
    const classes = useStyles();
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

    const PageOne = () => {
        return (
            <div className={classes.form}>
                <h1 className={classes.title}>やることリスト</h1>
                <Form addTodo={addTodo} />
                <List todos={todos} deleteTodo={deleteTodo} />
                <Link to="/pagetwo">
                    <Button type='button' variant="contained" color="primary">
                        終了！
                    </Button>
                </Link>
            </div>
        );
    };

    const PageTwo = () => {
        return (
            <div className={classes.form2}>
                <h1>お疲れ様でした！</h1>
                <div>
                    <img className={classes.image} alt=''/>
                    {/* <img src={img} alt='Img'></img> */}
                </div>
                <Link to="/">
                    <Button type='button' variant="contained" color="primary">
                        やることリストに戻る
                    </Button>
                </Link>
            </div>
        );
    };

    return(
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
        // <div className={classes.form}>
        //     <h1 className={classes.title}>やることリスト</h1>
        //     <Form addTodo={addTodo}/>
        //     <List todos={todos} deleteTodo={deleteTodo} />
        //     <Button type='button' variant="contained" color="primary">
        //         終了！
        //     </Button>
        // </div>
    )
};

export default App;