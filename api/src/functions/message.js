const { app } = require('@azure/functions');
const { Client } = require('@microsoft/microsoft-graph-client');
const { DefaultAzureCredential, ClientSecretCredential } = require('@azure/identity');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return { body: `{"text": "Hello, from the API!"}` };
    }
});