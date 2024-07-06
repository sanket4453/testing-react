import { render, screen } from "@testing-library/react";
import Skills from "./skills";

describe("skill", () =>{
    const skills = ['HTML', 'CSS', 'JavaScript']

    test('should render correctly', () => {
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })

    test("renders a list of skills", () => {
        render(<Skills skills={skills} />)
        const listElements = screen.getAllByRole('listitem')
        console.log(listElements)
        expect(listElements).toHaveLength(3);
    })

    
})