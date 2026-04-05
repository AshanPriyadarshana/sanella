import React, { useState } from 'react';

const SalaryManagement = () => {
    const [records, setRecords] = useState([]);
    const [employee, setEmployee] = useState('');
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState('unpaid');

    const handleAddRecord = () => {
        setRecords([...records, { employee, amount, status }]);
        setEmployee('');
        setAmount('');
        setStatus('unpaid');
    };

    return (
        <div>
            <h2>Salary Management</h2>
            <input type="text" placeholder="Employee Name" value={employee} onChange={(e) => setEmployee(e.target.value)} />
            <input type="number" placeholder="Salary Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="unpaid">Unpaid</option>
                <option value="paid">Paid</option>
            </select>
            <button onClick={handleAddRecord}>Add Record</button>
            <ul>
                {records.map((record, index) => (
                    <li key={index}>{record.employee} - ${record.amount} - {record.status}</li>
                ))}
            </ul>
        </div>
    );
};

export default SalaryManagement;