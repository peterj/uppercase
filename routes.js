const Router = require('express');
const router = Router();

router.get('/uppercase/:value', (req, res) => {
    const value = req.params.value;
    res.status(200).json({ result: value.toUpperCase() });
});

module.exports = router;