const { Router } = require('express');
const router = Router();

const { getUsers, addUser, getUserById, deleteUser, updateUser, getRaiz } = require('../controllers/index')

router.get("/", getRaiz);

router.get('/users', getUsers);

router.post('/users',addUser);

router.get('/users/:id', getUserById);

router.delete('/users/:id', deleteUser);

router.put('/users/:id', updateUser);

module.exports = router;