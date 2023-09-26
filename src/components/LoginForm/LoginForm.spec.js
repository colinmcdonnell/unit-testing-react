import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

const user = userEvent.setup();

describe("<LoginForm />", () => {
  it("submit button should be disabled", async () => {
    render(<LoginForm />);

    await user.type(
      screen.getByRole("textbox", { name: /user name/i }),
      "Colin"
    );

    expect(screen.getByRole("button", { name: /submit/i })).toBeDisabled();
  });

  it("submit button should be enabled", async () => {
    render(<LoginForm />);

    await user.type(
      screen.getByRole("textbox", { name: /user name/i }),
      "Colin"
    );
    await user.type(
      screen.getByRole("textbox", { name: /password/i }),
      "password"
    );

    expect(screen.getByRole("button", { name: /submit/i })).toBeEnabled();
  });

  // in this case we would usually mock the response that would come from an actual API
  // for demo purposes we can just pretend a request was made and ensure the correct message is displayed
  //
  // real life example: a website has a form that displays certain steps at a time -- step 1, step 2, etc...
  // our test would assert that the step 2 form is displayed for the user after step 1 submitted successfully
  it("should show success message", async () => {
    render(<LoginForm />);

    await user.type(
      screen.getByRole("textbox", { name: /user name/i }),
      "Colin"
    );
    await user.type(
      screen.getByRole("textbox", { name: /password/i }),
      "password"
    );
    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByText(/success!/i)).toBeInTheDocument();
  });

  it("should show error message", async () => {
    render(<LoginForm formSuccess={false} />);

    await user.type(
      screen.getByRole("textbox", { name: /user name/i }),
      "Colin"
    );
    await user.type(
      screen.getByRole("textbox", { name: /password/i }),
      "password"
    );
    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByText(/error message/i)).toBeInTheDocument();
  });
});
