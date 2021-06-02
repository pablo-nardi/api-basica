const { Router } = require('express');
const router = Router();

const { /*getUsers, addUser, getUserById, deleteUser, updateUser, */getRaiz, getActors } = require('../controllers/index')

router.get("/", getRaiz);
/*
router.get('/users', getUsers);

router.post('/users',addUser);

router.get('/users/:id', getUserById);

router.delete('/users/:id', deleteUser);

router.put('/users/:id', updateUser);*/

router.get("/actors", getActors);

module.exports = router;