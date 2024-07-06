import { render, screen } from "@testing-library/react";
import CounterTwo from "./CounterTwo";
import user from "@testing-library/user-event";

test("handler are called", async () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
        <CounterTwo
        initialcount={0}
        increment={incrementHandler}
        decrement={decrementHandler}
        />
    );

    const incrementBtn = screen.getByRole('button', {name: 'Increment'})
    const decrementBtn = screen.getByRole('button', {name: 'Decrement'})
    await user.click(incrementBtn)
    await user.click(decrementBtn)
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1)

})