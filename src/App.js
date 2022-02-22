import { useEffect, useState } from "react";
import { AddForm } from "./components/AddForm";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    fetchTasks()
  }, [])

  const [form, setForm] = useState(false)

  const fetchTasks = async () => {
    const tasks = await fetch('http://localhost:5000/tasks')
    const data = await tasks.json()

    setTasks(data)
  }

  const deleteTask = id => {
    fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
    .then(() => setTasks(tasks.filter(task => task.id != id)))
  }

  const toggleReminder = async (id) => {
    const task = await fetchTask(id)
    const updatedTask = {...task, reminder: !task.reminder}

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask)
    };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, requestOptions)
    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }

  const fetchTask = async (id) => {
    const tasks = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await tasks.json()

    return data
  }

  const addTask = async (task) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    };

    const res = await fetch(`http://localhost:5000/tasks`, requestOptions)
    const data = await res.json()
    setTasks([...tasks, data])
  }

  const toggleForm = () => {
    setForm(!form)
  }

  return (
    <Router>
    <div className="container">
      <Header toggleForm={toggleForm} formState={form}/>
      { form && <AddForm onAdd={addTask}/>}
      <Routes>
      <Route
            path='/'
            element= { tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/> : 'No tasks'}
          />
        <Route path="/about" element={<About setForm={setForm}/>}/>
      </Routes>
      <Footer/>

    </div>
    </Router>
  );
}

export default App;
