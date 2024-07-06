import {  renderHook } from "@testing-library/react";
import { useCounter } from './useCounter'
import { act } from "react-dom/test-utils";

describe("useCounter", () => {
    test("should render the initial count", () => {
        const { result } = renderHook(useCounter);
        expect(result.current.count).toBe(0) 
    })

    test("should accept and render the same initial count", () =>{
        const { result } = renderHook(useCounter, {
            initialProps : {
                initialcount : 10
            }
        })

        expect(result.current.count).toBe(10)
    })

    test("should increment the count by 1",  () => {
        const { result } = renderHook(useCounter);
        act(() => result.current.increment()) 

        expect(result.current.count).toBe(1)
    })
    test("should increment the count by 1",  () => {
        const { result } = renderHook(useCounter);
        act(() => result.current.decrement()) 

        expect(result.current.count).toBe(-1)
    })
})