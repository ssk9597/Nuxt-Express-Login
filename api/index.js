const express = require('express');

// Create express instance
const app = express();

//body-parserが標準搭載（req.body）
// https://qiita.com/atlansien/items/c587a0bf2f7f9022107c
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Require API routes
const users = require('./routes/users');
const register = require('./routes/register');
const login = require('./routes/login');

// Import API Routes
app.use(users);
app.use(register);
app.use(login);

// Export express app
module.exports = app;

// Start standalone server if directly running
if (require.main === module) {
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
        console.log(`API server listening on port ${port}`);
    });
}
