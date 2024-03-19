import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddExercisePage = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    // create a new exercise 
    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST', 
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // check if exercise was successfully added
        if (response.status === 201) {
            alert('Successfully added the exercise');
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        // take user back to home page 
        navigate("/");
    };

    return (
        <>
            <h2>Add Exercise</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Unit</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input className="input"
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={e => setName(e.target.value)} />
                        </td>
                        <td>
                            <input className="input"
                                type="number"
                                placeholder="Reps"
                                value={reps}
                                onChange={e => setReps(e.target.value)} />
                        </td>
                        <td>
                            <input className="input"
                                type="number"
                                placeholder="Weight"
                                value={weight}
                                onChange={e => setWeight(e.target.value)} />
                        </td>
                        <td>
                            <select className="input" 
                                value={unit} 
                                onChange={e => setUnit(e.target.value)}>
                                <option value="">Select</option>
                                <option value="lbs">lbs</option>
                                <option value="kgs">kgs</option>
                            </select>
                        </td>
                        <td>
                            <input className="input"
                                type="text"
                                placeholder="MM-DD-YY"
                                value={date}
                                onChange={e => setDate(e.target.value)} />
                        </td>
                        <td>
                            <button className="button"
                                onClick={addExercise}>
                                Add
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default AddExercisePage;