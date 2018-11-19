'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.json());
const fileManager = require('./file_manager')
const token = 'axcessFIN';

    app.post('/naznaznaz', (req, res) => {
        if (req.header('token') !== token) {
            return res.sendStatus(401);
        }

    const req_body = JSON.stringify(req.body)
    console.log('\n \n'+'This is the payload from the CI: \n' + req_body + '\n \n');

    const data = {
            text: ['CI POST recieved!']
    };

    res.json(data);

fileManager.createPayloadFile(req_body);
});

app.listen(3000, () => console.log('The Webhook is now listening'));
