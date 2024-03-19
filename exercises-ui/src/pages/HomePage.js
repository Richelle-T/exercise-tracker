import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ExerciseTable from '../components/ExerciseTable';


function HomePage({setExerciseToEdit}){
    const navigate = useNavigate();
    const [exercises, setExercises] = useState([]);

    // permanently delete an exercise
    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
        // check if exercise was successfully deleted
        if (response.status === 204) {
            setExercises(exercises.filter(e => e._id !== _id));
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`);
        }
    }

    // edit an exercise 
    const onEdit = async exerciseToEdit => {
        setExerciseToEdit(exerciseToEdit);
        navigate("/edit-exercise");
    }

    // get all exercises by making a HTTP request to the REST API
    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
            <ExerciseTable 
                exercises={exercises} 
                onDelete={onDelete} 
                onEdit={onEdit}>
            </ExerciseTable>
        </>
    )
}

export default HomePage;