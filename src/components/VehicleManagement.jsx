import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const VehicleManagement = () => {
    const [vehicles, setVehicles] = useState([]);
    const [vehicleName, setVehicleName] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');

    useEffect(() => {
        const vehicleRef = firebase.database().ref('vehicles');
        vehicleRef.on('value', (snapshot) => {
            const vehiclesList = snapshot.val();
            const vehiclesArray = vehiclesList ? Object.keys(vehiclesList).map(key => ({ id: key, ...vehiclesList[key] })) : [];
            setVehicles(vehiclesArray);
        });

        return () => vehicleRef.off();
    }, []);

    const handleAddVehicle = () => {
        const newVehicleRef = firebase.database().ref('vehicles').push();
        newVehicleRef.set({ name: vehicleName, color: vehicleColor });
        setVehicleName('');
        setVehicleColor('');
    };

    const handleDeleteVehicle = (id) => {
        const vehicleRef = firebase.database().ref('vehicles').child(id);
        vehicleRef.remove();
    };

    return (
        <div>
            <h1>Vehicle Management</h1>
            <input
                type="text"
                placeholder="Vehicle Name"
                value={vehicleName}
                onChange={(e) => setVehicleName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Vehicle Color"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
            />
            <button onClick={handleAddVehicle}>Add Vehicle</button>
            <ul>
                {vehicles.map(vehicle => (
                    <li key={vehicle.id}>
                        {vehicle.name} ({vehicle.color})
                        <button onClick={() => handleDeleteVehicle(vehicle.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VehicleManagement;