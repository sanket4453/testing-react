import { render, screen } from "@testing-library/react"
import { Application } from "./Application"


describe('application' , ()=>{

    test('render input filed correctly', () => {
        render(<Application />)

        const textBox = screen.getByRole('textbox', {
            name : 'Name'
        }); 
        expect(textBox).toBeInTheDocument();

        // // const textarea = screen.getByRole('')
        const data = screen.getByRole('checkbox')
        expect(data).toBeInTheDocument();
        // const termsElement = screen.getByRole('checkbox')
        // expect(termsElement).toBeInTheDocument()
    })
}) 