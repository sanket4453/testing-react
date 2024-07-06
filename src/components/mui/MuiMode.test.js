// import { AppProviders } from "../../providers/AppProviders"
import { MuiMode } from "./MuiMode"
import { render, screen } from "../../test.utils"

describe("MuiMode", () => {
    test("render text correctly", () => {
        render(<MuiMode /> )

        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('dark mode');
    })
})