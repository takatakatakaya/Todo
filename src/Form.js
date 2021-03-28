import React,{useState} from 'react';

const Form = ({addTodo}) => {
    const [value,setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        // if (value.trim().length === 0) {
        //     alert('文字を入力してください');
        //     return;
        // }
        // addTodo(value);
        if (value) {
            addTodo(value);
        } else {
            alert('文字を入力してください。')
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                onChange={e => {
                 setValue(e.target.value);
                }}
             />
             <button>
                 送信
             </button>
        </form>
    )
}

export default Form;