import React, { useState } from 'react';

const WorkPlanning = () => {
    const [tasks, setTasks] = useState([]);
    const [address, setAddress] = useState('');
    const [itemDetails, setItemDetails] = useState('');
    const [routeTime, setRouteTime] = useState('');
    const [assignedTo, setAssignedTo] = useState('');

    const handleAddTask = () => {
        setTasks([...tasks, { address, itemDetails, routeTime, assignedTo }]);
        setAddress('');
        setItemDetails('');
        setRouteTime('');
        setAssignedTo('');
    };

    return (
        <div>
            <h2>Work Planning</h2>
            <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <input type="text" placeholder="Item Details" value={itemDetails} onChange={(e) => setItemDetails(e.target.value)} />
            <input type="time" placeholder="Route Time" value={routeTime} onChange={(e) => setRouteTime(e.target.value)} />
            <input type="text" placeholder="Assigned To" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task.address} - {task.itemDetails} - {task.routeTime} - {task.assignedTo}</li>
                ))}
            </ul>
        </div>
    );
};

export default WorkPlanning;