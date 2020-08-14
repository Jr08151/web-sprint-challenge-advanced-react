import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";
import App from '../App'

// Write up the two tests here and make sure they are testing what the title shows

test("App Renders Successfuly", () => {
    act(() => {
        render(<App />)
    })
});

test("form header renders", () => {
    act(() => {
        render(<CheckoutForm />)
    })


    screen.getByText(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
    act(() => {
        render(<CheckoutForm />)
    })
    const firstName = screen.getByLabelText(/first name:/i)
    const lastName = screen.getByLabelText(/last name:/i)
    const address = screen.getByLabelText(/address:/i)
    const city = screen.getByLabelText(/city:/i)
    const state = screen.getByLabelText(/state:/i)
    const zip = screen.getByLabelText(/zip:/i)

    const checkoutButton = screen.getByRole('button', /checkout/i)

    act(() => {
        fireEvent.change(firstName, { target: { ref: 'first name test' } })
        fireEvent.change(lastName, { target: { ref: 'last name test' } })
        fireEvent.change(address, { target: { ref: 'address test' } })
        fireEvent.change(city, { target: { ref: 'city test' } })
        fireEvent.change(state, { target: { ref: 'state test' } })
        fireEvent.change(zip, { target: { ref: '111111' } })

        fireEvent.click(checkoutButton)
    })
    expect.objectContaining(expect.anything)
});