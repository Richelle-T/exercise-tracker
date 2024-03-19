import React from 'react';
import ExerciseRow from './ExerciseRow';

function ExerciseTable({ exercises, onDelete, onEdit }){
    return (
        <div className="scrollable-table"> 
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Unit</th>
                        <th>Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map((exercise, i) => 
                        <ExerciseRow exercise = {exercise} 
                        onDelete = {onDelete}
                        onEdit = {onEdit}
                        key = {i} />)}
                </tbody>
            </table>
        </div>
    );
}

export default ExerciseTable;