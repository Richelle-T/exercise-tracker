import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditMoviePage = ({exerciseToEdit}) => {
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const navigate = useNavigate();

    // edit an existing exercise 
    const editExercise = async () => {
        const editedExercise = { name, reps, weight, unit, date };
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT', 
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // check if exercise was successfully edited
        if (response.status === 200) {
            alert('Successfully edited the exercise');
        } else {
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }
        // take user back to home page 
        navigate("/");
    };

    return (
        <>
            <h2>Edit Exercise</h2>
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
                            value={name}
                            onChange={e => setName(e.target.value)} />
                        </td>
                        <td>
                            <input className="input"
                                type="number"
                                value={reps}
                                onChange={e => setReps(e.target.value)} />
                        </td>
                        <td>
                            <input className="input"
                                type="number"
                                value={weight}
                                onChange={e => setWeight(e.target.value)} />
                        </td>
                        <td>
                            <select className="input"
                                value={unit} 
                                onChange={e => setUnit(e.target.value)}>
                                <option value="lbs">lbs</option>
                                <option value="kgs">kgs</option>
                            </select>
                        </td>
                        <td>
                            <input className="input"
                                type="text"
                                value={date}
                                onChange={e => setDate(e.target.value)} />
                        </td>
                        <td>
                            <button className="button"
                                onClick={editExercise}>
                                Save
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default EditMoviePage;