import React, { useState } from 'react';

export default function AddTaskForm({ addTask, setView }) {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            taskName,
            description,
            endDate,
            completed: false,
            addedDate: new Date().toISOString()
        };
        addTask(newTask);
        setView('ALL');
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg backdrop-blur-md bg-white/15 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add a New Task</h2>
            <div className="mb-4">
                <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="taskName">
                    Task Name
                </label>
                <input
                    type="text"
                    id="taskName"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className="shadow appearance-none  rounded w-full py-2 px-3 backdrop-blur-md bg-white/15  text-black leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="backdrop-blur-md bg-white/15 shadow appearance-none  rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4 ">
                <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="endDate">
                    End Date
                </label>
                <input
                    type="datetime-local"
                    id="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="backdrop-blur-md bg-white/15 shadow appearance-none rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Add Task
                </button>
                <button
                    type="button"
                    onClick={() => setView('ALL')}
                    className="bg-gradient-to-b from-gray-900 to-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}
