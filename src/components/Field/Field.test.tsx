import { render } from "@testing-library/react"

import Field  from "./Field"

describe('test Page component', () => {

    test('renders Page component', () => {
        
       const { container } = render(<Field />)

        expect(container).toMatchSnapshot()
    })

})