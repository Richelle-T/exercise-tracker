import React from 'react';
import { MdEdit, MdDeleteForever } from "react-icons/md";

function ExerciseRow({ exercise, onDelete, onEdit }){
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><MdEdit onClick={() => onEdit(exercise)} /></td>
            <td><MdDeleteForever onClick={() => onDelete(exercise._id)} /></td>
        </tr>
    );
}

export default ExerciseRow;