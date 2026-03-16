import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

let students = [];

app.post('/students', (req, res) => {
    const { name, age, email, address } = req.body;

    const student = { name, age, email, address };
    students.push(student);

    if (!name || !age || !email || !address) {
        return res.status(400).send('All fields are required');
    }
    
    res.status(201).send('Student added successfully');
});

