import { render, screen } from "@testing-library/react"
import Counter from "./Counter"
import User from '@testing-library/user-event'


describe("counter", () => {

    test("render button correctly", () => {

        render(<Counter />)

        // const elementIncrement = screen.getAllByRole('button')
        // expect(elementIncrement).toBeInTheDocument()
    })

    test("should be render increment count correctly", async () => {
        render(<Counter />)
        // User.setUp()
        const incrementBtn = screen.getByRole('button', {
            name : 'Increment'
        })

        await User.click(incrementBtn)


        const countText = screen.getByRole('heading')
        expect(countText).toHaveTextContent('1')
    })

    test("should be render increment count by twice", async () => {
        render(<Counter />)
        const incrementBtn = screen.getByRole('button', {
            name : 'Increment'
        })

        // await User.dblClick(incrementBtn);
        await User.click(incrementBtn);
        await User.click(incrementBtn);
        const countText = screen.getByRole('heading');
        expect(countText).toHaveTextContent('2');

    })

    test("renders a count of 10 after clicking on the set button",async () => {
        render(<Counter />)

        const amountInput = screen.getByRole('spinbutton')
        await User.type(amountInput, "10")
        expect(amountInput).toHaveValue(10)
        const setButton = screen.getByRole('button', {
            name : "Set"
        })
        await User.click(setButton);
        const countElement = screen.getByRole("heading")
        expect(countElement).toHaveTextContent('10')
    })
      
    test("Should be focued on every element one by one", async () => {
        render(<Counter />)

        const incrementBtn = screen.getByRole('button', {name:'Increment'})
        const inputField = screen.getByRole('spinbutton')
        const setBtn = screen.getByRole('button', {name : 'Set'})

        await User.tab();
        expect(incrementBtn).toHaveFocus();
        await User.tab();
        expect(inputField).toHaveFocus();
        await User.tab();
        expect(setBtn).toHaveFocus();
    })

})