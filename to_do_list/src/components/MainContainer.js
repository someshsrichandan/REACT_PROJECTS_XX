import React, { useState } from 'react';
import Cards from './Cards';
import AddTaskForm from './AddTaskForm';
import './ScrollBar.css';

export default function MainContainer() {
    const [view, setView] = useState('ALL'); // 'ALL', 'ADD_TASK', 'COMPLETED'
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const toggleCompleted = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        if (newTasks[index].completed) {
            newTasks[index].completedAt = new Date().toLocaleString();
        } else {
            delete newTasks[index].completedAt;
        }
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const checkDeadline = (endDate) => {
        return new Date(endDate) < new Date() && !tasks.find(task => task.completed);
    };

    return (
        <div className='bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 w-screen h-screen flex justify-center items-center'>
            <div className='backdrop-blur-sm bg-white/10 h-[35rem] w-10/12 rounded-2xl flex flex-col'>
                <h1 className="mt-4 text-3xl font-extrabold text-transparent tracking-tighest text-center bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text">React To-Do</h1>
                <div className="flex justify-center mt-4 mb-4">
                    <div className="flex divide-x divide-gray-800">
                        <button
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-r-none border-r-0"
                            type="button"
                            onClick={() => setView('ALL')}
                        >
                            ALL
                        </button>
                        <button
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-r-none border-r-0 rounded-l-none"
                            type="button"
                            onClick={() => setView('ADD_TASK')}
                        >
                            ADD TASK
                        </button>
                        <button
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-l-none"
                            type="button"
                            onClick={() => setView('COMPLETED')}
                        >
                            COMPLETED
                        </button>
                    </div>
                </div>
                <div className="flex-grow overflow-y-auto pb-4 custom-scrollbar">
                    <div className="flex flex-col justify-center items-center w-full">
                        {view === 'ALL' && tasks.map((task, index) => (
                            <Cards 
                                key={index} 
                                task={task} 
                                index={index} 
                                toggleCompleted={toggleCompleted} 
                                deleteTask={deleteTask}
                                isDeadlineExceeded={checkDeadline(task.endDate)}
                            />
                        ))}
                        {view === 'ADD_TASK' && <AddTaskForm addTask={addTask} setView={setView} />}
                        {view === 'COMPLETED' && tasks.filter(task => task.completed).map((task, index) => (
                            <Cards 
                                key={index} 
                                task={task} 
                                index={index} 
                                toggleCompleted={toggleCompleted} 
                                deleteTask={deleteTask}
                                isDeadlineExceeded={checkDeadline(task.endDate)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
