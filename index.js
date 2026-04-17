const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello express server');
});

app.get('/contact', (req, res) => {
    res.send('This is the contact page');
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.post('/submit', (req, res) => {
    res.send('Form submitted successfully');
});

app.put('/update', (req, res) => {
    res.send('Resource updated successfully');
});

app.get('/api', (req, res) => {
    const data = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
    };
    res.json(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});