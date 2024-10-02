const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
    const fetch = (await import('node-fetch')).default;
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    res.json(users);
});

module.exports = router;
