import { screen, render } from '@testing-library/react'
import TextField from './TextField'

const props = {
  id: 'id',
  label: 'label',
  value: '',
  isRequired: false,
  maxLength: 10,
  onChange: jest.fn(),
  errorMessage: 'error'
}

describe('<TextField />', () => {
  it('should render label', () => {
    render(<TextField {...props} />)

    expect(screen.getByText(/label/i)).toBeInTheDocument()
  })
})
