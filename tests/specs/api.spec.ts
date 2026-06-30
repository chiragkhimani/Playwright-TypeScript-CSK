import {test, expect} from '@playwright/test';

test('API test', async ({request}) => {

    const response = await request.post('https://restful-booker.herokuapp.com/auth', {
        data: {
            username: 'admin',
            password: 'password123'
        },
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })

    console.log(await response.status());
    console.log(await response.json());
});
