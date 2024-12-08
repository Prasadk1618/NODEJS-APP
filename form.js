// form.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to serve the form
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Node.js Form</title>
        </head>
        <body>
            <h1>Sign Up Form</h1>
            <form action="/submit" method="post">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                <br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <br><br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                <br><br>
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { username, email, password } = req.body;

    // Simple validation
    if (!username || !email || !password) {
        return res.status(400).send('All fields are required!');
    }

    if (password.length < 6) {
        return res.status(400).send('Password must be at least 6 characters long.');
    }

    // Simulate success
    console.log('Form Data:', req.body);
    res.send(`Form submitted successfully! Welcome, ${username}!`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
