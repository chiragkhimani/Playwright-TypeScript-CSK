import { test, expect } from '@playwright/test';
import token_data from '../../data/create_token.json';
import { ApiUtils } from '../../utils/ApiUtils';
import create_booking_data from '../../data/create_booking.json';

test('API test Positive', async ({ request }) => {
    const apiUtils = new ApiUtils();
    const response = await apiUtils.createToken(request, token_data);
    expect(response.status()).toBe(200);
    expect(await response.json()).toHaveProperty('token');
});

test('API test Negative', async ({ request, page }) => {
    const apiUtils = new ApiUtils();
    const invalid_data = structuredClone(token_data);
    invalid_data.password = 'invalid_password';
    invalid_data.username = 'invalid_username';
    const response = await apiUtils.createToken(request, invalid_data);
    expect(response.status()).toBe(400);
    expect(response.status()).not.toHaveProperty('token');
    expect(await response.json()).toHaveProperty('reason', 'Bad credentials');
});

test('Verify user can update newly created booking', async ({ request }) => {
    const apiUtils = new ApiUtils();
    const createBookingResponse = await apiUtils.createBooking(request, create_booking_data);
    expect(createBookingResponse.status()).toBe(200);

    const bookingId = (await createBookingResponse.json()).bookingid;

    const response = await apiUtils.createToken(request, token_data);
    const token = (await response.json()).token;

    const updatedBookingData = structuredClone(create_booking_data);
    updatedBookingData.firstname = 'Chirag';
    updatedBookingData.lastname = 'Khimani';
    updatedBookingData.totalprice = 1000;

    const updateBookingResponse = await apiUtils.updateBooking(request, bookingId, updatedBookingData , token);
    expect(updateBookingResponse.status()).toBe(200);
    expect(await updateBookingResponse.json()).toHaveProperty('firstname', 'Chirag');
    expect(await updateBookingResponse.json()).toHaveProperty('lastname', 'Khimani');
    expect(await updateBookingResponse.json()).toHaveProperty('totalprice', 1000);
});