import { useEffect, useState } from "react"
import ToDO from "./To-do-component"
import Spiner from "./Spiner"

export default function Section() {
    const [todoList, setToDo] = useState([])
    const [pending, setIsPending] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(res => res.json())
            .then(data => {
                setToDo(data)
                setIsPending(false)
            })
            .catch(err => console.log(err.message))
    }, [])

    function handleChnage(dataToDO){
        setIsPending(true)
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'isCompleted': !dataToDO.isCompleted })
        }

        fetch('http://localhost:3030/jsonstore/todos/' + dataToDO._id, options)
            .then(res => res.json())
            .then(data => {
                const todoId = data._id
                setToDo(t => ({...t, [todoId]: data}))
                setIsPending(false)
            })
            .catch(err => console.log(err.message))
        
    }


    return (
        <section className="todo-list-container">
            <h1>Todo List</h1>

            <div className="add-btn-container">
                <button className="btn">+ Add new Todo</button>
            </div>

            <div className="table-wrapper">
                {pending ? <Spiner /> : ''}

                {/* {<!-- Loading spinner - show the load spinner when fetching the data from the server-->} */}
                

                {/* <!-- Todo list table --> */}
                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-header-task">Task</th>
                            <th className="table-header-status">Status</th>
                            <th className="table-header-action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(todoList).map(i => <ToDO key={i._id} data={i} eventHandler={() => handleChnage(i)} />)}
                    </tbody>
                </table>
            </div>
        </section>
    )
}