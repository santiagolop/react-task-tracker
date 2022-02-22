import { useState } from "react"

export const AddForm = ({onAdd}) => {
    const [text, setText] = useState('');
    const [reminder, setReminder] = useState(false);
    const [date, setDate] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Ingrese una tarea!');
            return
        }

        onAdd({text,date,reminder});

        setText('')
        setReminder(false)
        setDate('')
    }

    return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Text</label>
        <input type="text" placeholder="Add a task" value={text} onChange={e => setText(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input type="checkbox" checked={reminder} placeholder="Remind?" value={reminder} onChange={e => setReminder(e.currentTarget.checked)} />
      </div>
      <div className="form-control">
        <label>Day and time</label>
        <input type="text" placeholder="Add day and time" value={date} onChange={e => setDate(e.target.value)}/>
      </div>
      <input type="submit" value='Save task' className="btn btn-block" />
    </form>
    )
}