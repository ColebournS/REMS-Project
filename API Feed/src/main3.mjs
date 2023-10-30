import https from 'https';

async function sendRequest(value) {
    // Define the API URL and API key
    const apiUrl = 'https://emoncms.org/feed/insert.json?id=486007&';
    const apiKey = '&apikey=d9d1aa5a33ecc6b9dd62be2f3524fe98';

    const time = Math.floor(Date.now() / 1000);

    // Create the data object to send
    const fullURL = `${apiUrl}time=${time}&value=${value}${apiKey}`;

    return new Promise((resolve, reject) => {
        const request = https.request(fullURL, (response) => {
            let responseData = '';

            response.on('data', (chunk) => {
                responseData += chunk;
            });

            response.on('end', () => {
                console.log('Response Code:', response.statusCode);
                // You can handle the response data here if needed.
                resolve();
            });
        });

        request.on('error', (error) => {
            console.error(error);
            reject(error);
        });

        request.end();
    });
}

// Example usage:
async function main() {
    try {
        await sendRequest(2319);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();