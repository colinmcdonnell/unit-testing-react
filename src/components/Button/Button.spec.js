import {
  render,
  screen
  // fireEvent
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

const user = userEvent.setup()

const props = { onClick: jest.fn() }

describe('<Button />', () => {
  it('should be enabled', () => {
    render(<Button {...props}>click me</Button>)

    expect(screen.getByRole('button', { name: /click me/i })).toBeEnabled()
  })

  it('should be disabled', () => {
    render(
      <Button {...props} disabled>
        click me
      </Button>
    )

    // expect(screen.getByRole('button', { name: /click me/i })).not.toBeEnabled()

    // more than one way to test things
    expect(screen.getByRole("button", { name: /click me/i })).toBeDisabled();
  })

  it('should call onClick', async () => {
    render(<Button {...props}>click me</Button>)

    // we can test the onClick with fireEvent, but user event is the better option: https://testing-library.com/docs/user-event/intro/
    // fireEvent -> fireEvent.click(screen.getByRole("button", { name: /click me/i }));
    await user.click(screen.getByRole('button', { name: /click me/i }))

    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
})
