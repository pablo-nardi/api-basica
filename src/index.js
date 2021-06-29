import express from 'express'
import consign from 'consign'

const app = express();

consign({
    cwd:__dirname
})
    .include('libs/middlewares.js')
    .then('libs/boot.js')
    .into(app)



