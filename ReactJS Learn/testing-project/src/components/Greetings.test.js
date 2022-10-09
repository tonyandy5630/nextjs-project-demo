import { queryByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("<Greeting component", () => {
  test("renders Hello World as a text", () => {
    //! Arrange
    render(<Greeting />);

    //! Act
    //* ... something

    //! Assert
    const hellowWorldElement = screen.getByText("Hello World", {
      exact: false,
    });
    expect(hellowWorldElement).toBeInTheDocument();
  });

  test("renders It's good to see you! as Text if button is not clicked", () => {
    //! Arrange
    render(<Greeting />);

    //! Act

    //! Assert
    const textChangeElement = screen.getByText("It's good to see you!");
    expect(textChangeElement).toBeInTheDocument();
  });

  test("renders Good bye as Text if button was clicked", () => {
    //! Arrange
    render(<Greeting />);

    //! Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //! Assert
    const outputElement = screen.getByText("Good bye", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('not renders "It\'s good to see you !" as Text when button was clicked', async () => {
    //! Arrange
    render(<Greeting />);

    //! Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //! Assert
    const outputElement = screen.queryByText("It's good to see you!", {
      exact: false,
    });

    expect(outputElement).toBeNull();
  });
});
