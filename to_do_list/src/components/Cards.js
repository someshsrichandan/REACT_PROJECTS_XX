import React from 'react';

export default function Cards({ task, index, toggleCompleted, deleteTask }) {
    const isDeadlineExceeded = new Date(task.endDate) < new Date() && !task.completed;

    return (
        <div className={`backdrop-blur-md w-full max-w-4xl h-20 p-4 rounded-lg mt-4 flex items-center ${isDeadlineExceeded ? 'bg-red-500' : 'bg-white/15'}`}>
            <input 
                type="checkbox" 
                className="mr-4 h-5 w-5 text-purple-500 border-gray-300 rounded focus:ring-purple-400" 
                checked={task.completed}
                onChange={() => toggleCompleted(index)}
            />
            <div className="flex-grow flex flex-col">
                <h2 className={`text-lg font-semibold ${task.completed ? 'line-through' : ''}`}>{task.taskName}</h2>
            </div>
            <div className="flex-grow flex flex-col justify-center">
                <p className="text-sm">{task.description}</p>
            </div>
            <div className="flex flex-col items-end">
                <p className="text-xs text-gray-200">Added: {new Date(task.addedDate).toLocaleString()}</p>
                <p className="text-xs text-gray-200">End Date: {new Date(task.endDate).toLocaleString()}</p>
                {task.completed && <p className="text-xs text-gray-200">Completed: {task.completedAt}</p>}
                {isDeadlineExceeded && !task.completed && <p className="text-xs text-red-700">Time was over, task not completed</p>}
                <div className="flex items-center space-x-2 mt-2">
                    <button 
                        onClick={() => deleteTask(index)} 
                        className="text-black hover:text-red-700 hover:underline"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
