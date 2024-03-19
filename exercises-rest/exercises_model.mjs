import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});


/**
 * Define the schema
 */
const exerciseSchema = mongoose.Schema({
    name: {type: String, required: true}, 
    reps: {type: Number, required: true},
    weight: {type: Number, required: true},
    unit: {type: String, required: true},
    date: {type: String, required: true}
});

/**
 * Compile the model from the schema.
 */
const Exercise = mongoose.model("Exercise", exerciseSchema);

/**
 * Create an exercise. 
 */
const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date});
    return exercise.save();
}

/**
 * Finds all exercises.
 */
const findAllExercises = async () => {
    const query = Exercise.find();
    return query.exec();
}

/**
 * Find an exercise by ID. 
 */
const findExerciseByID = async (_id) => {
    const query = Exercise.findById(_id);
    return query.exec();
}

/**
 * Update an exercise by ID. 
 */
const updateExercise = async (_id, name, reps, weight, unit, date) => {
    const result = await Exercise.replaceOne({_id: _id}, {name: name, reps: reps, weight: weight, unit: unit, date: date});
    return result.modifiedCount;  // number modified 
}

/**
 * Delete an exercise by ID. 
 */
const deleteExerciseByID = async (_id) => {
    const result = await Exercise.deleteOne({_id: _id});
    return result.deletedCount;
}


// Make functions available to files that import this file 
export {createExercise, findAllExercises, findExerciseByID, updateExercise, deleteExerciseByID};  