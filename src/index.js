import express from 'express';
import consign from 'consign'; //nos permite estrucuturar el proyecto

const app = express();

consign({  // cwd --> current working directory
    cwd:__dirname 
})
    .include('libs/config.js')
    .then('db.js') 
    .then('libs/middlewares.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app) // funciona como parametro para las llamadas de [include] y [then]


