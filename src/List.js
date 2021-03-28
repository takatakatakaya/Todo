import React from 'react';
import Item from './Item';

const List = ({todos,deleteTodo}) => {
    return (
        <ul>
            {
                todos.map((todo,index) => {
                    return (
                        <Item 
                        content={todo.content} 
                        deleteTodo={deleteTodo}
                        id={todo.id}
                        key={index}/>
                    )
                })
            }
        </ul>
    )
}

export default List;