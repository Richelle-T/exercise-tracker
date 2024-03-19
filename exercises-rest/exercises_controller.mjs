import 'dotenv/config';
import * as exercises from './exercises_model.mjs';
import express from 'express';
import { body, validationResult } from 'express-validator';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

/**
 * Array of middleware functions to validate the request body.
 * name must be a string containing at least 1 character
 * reps must be an integer greater than 0
 * weight must be an integer greater than 0
 * unit must be either the string 'kgs' or the string 'lbs'
 * date must be a string in the format 'MM-DD-YY' where MM, DD, YY are 2-digit integers 
 */
const validateRequest = [
    body('name').isString().notEmpty(),
    body('reps').isInt({ min: 1 }),
    body('weight').isInt({ min: 1 }),
    body('unit').isIn(['kgs', 'lbs']),
    body('date').matches(/^\d\d-\d\d-\d\d$/),
]

/**
 * Create a new exercise with the name, reps, weight, unit, and date provided in the body.
 */
app.post('/exercises', validateRequest, (req, res) => {
    // make sure the request is valid
    const result = validationResult(req)
    if (!result.isEmpty()) {
        console.error(result.array());
        return res.status(400).json({ Error: 'Invalid request' });
    }
        
    // create the exercise 
    const { name, reps, weight, unit, date } = req.body;
    exercises.createExercise(name, reps, weight, unit, date)
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });
});

/**
 * Read all exercises.  
 */
app.get('/exercises', (req, res) => {
    exercises.findAllExercises()
        .then(exercises => {
            res.status(200).json(exercises);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });
});

/**
 * Retrive the exercise corresponding to the ID provided in the path parameter
 */
app.get('/exercises/:_id', (req, res) => {
    const exerciseID = req.params._id;
    exercises.findExerciseByID(exerciseID)
        .then(exercise => {
            // check if there's an exercise with the ID 
            if (exercise !== null) {
                res.status(200).json(exercise);
            } else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });
});

/**
 * Update the exercise whose id is provided in the path parameter and set
 * its name, reps, weight, unit, and date to the values provided in the body.
 */
app.put('/exercises/:_id', validateRequest, (req, res) => {
    // make sure the request is valid
    const result = validationResult(req)
    if (!result.isEmpty()) {
        console.error(result.array());
        return res.status(400).json({ Error: 'Invalid request' });
    }

    // update the exercise
    const _id = req.params._id
    const { name, reps, weight, unit, date } = req.body;
    exercises.updateExercise(_id, name, reps, weight, unit, date)
        .then(numUpdated => {
            // check if there's an exercise with the ID 
            if (numUpdated === 1) {
                res.status(200).json({ 
                    _id: _id, 
                    name: name, 
                    reps: reps, 
                    weight: weight, 
                    unit: unit, 
                    date: date 
                });
            } else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });
});

/**
 * Delete the exercise whose id is provided in the path parameter
 */
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteExerciseByID(req.params._id)
        .then(deletedCount => {
            // check if there's an exercise with the ID 
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        })
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});