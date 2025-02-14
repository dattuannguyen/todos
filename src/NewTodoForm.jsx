import {useState} from "react";

export function NewTodoForm({onSubmit}){

    const [newItem, setNewItem]=useState("")

    function handleSubmit(e){
        e.preventDefault()
        onSubmit(newItem)
        setNewItem("");

    }
    return(
        <form onSubmit={handleSubmit} className="new-item-form" action="">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value={newItem}
                       onChange={event => setNewItem(event.target.value)}
                       type="text"
                       id="item"/>
            </div>
            <button className="btn" >Add</button>
        </form>
        )

}