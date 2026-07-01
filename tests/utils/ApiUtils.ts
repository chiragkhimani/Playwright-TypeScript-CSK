import { APIRequestContext } from '@playwright/test';

export class ApiUtils {

    async createToken(request: APIRequestContext, body: object) {
        const response = await request.post('/auth', {
            data: body,
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response;
    }

    async createBooking(request: APIRequestContext, body: object) {
        const response = await request.post('/booking', {
            data: body,
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response;
    }

    async updateBooking(request: APIRequestContext, bookingId: number, body: object, token: string) {
        const response = await request.put(`/booking/${bookingId}`, {
            data: body,
            headers: {
                'Content-Type': 'application/json',
                'Cookie': `token=${token}`
            }
        });
        return response;
    }
}