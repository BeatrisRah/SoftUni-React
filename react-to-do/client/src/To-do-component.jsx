

export default function ToDO(props){
    

    
    return(
        <tr className={props.data.isCompleted ? 'todo is-completed': 'todo'}>
            <td>{props.data.text}</td>
            <td>{props.data.isCompleted ? 'Completed': 'Not Completed'}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={props.eventHandler} >Change status</button>
            </td>
        </tr>

        
    )
}

// class="todo is-completed">