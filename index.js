import express from 'express'

const app = express()

function requestCallback(request, response) {
    console.log('request received')
    response.status(200).send('request received')
}

app.get('/', requestCallback)

app.listen(3000)