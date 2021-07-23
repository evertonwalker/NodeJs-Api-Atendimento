const express = require('express');
const consign = require('consign');

const ConfigExpress = () => {

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    consign()
        .include('controllers')
        .into(app)

    return app;
}

module.exports = ConfigExpress;