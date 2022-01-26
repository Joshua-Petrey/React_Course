import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("<Greeting/> tests", () => {
  test("Renders hello world", () => {
    // Arrange
    render(<Greeting />);
    // Act
    // Assert
    const helloWorldEl = screen.getByText("Hello World!");
    expect(helloWorldEl).toBeInTheDocument();
  });

  test("Renders -it's good to see you!- if button not clicked", () => {
     render(<Greeting />);
     const seeYouEl = screen.getByText("It's good to see you!");
     expect(seeYouEl).toBeInTheDocument();
   });

  test("Renders -Text was changed- if button was clicked", () => {
    //  Arrange
     render(<Greeting />);
    // Act
    const btnElement = screen.getByRole('button')
    userEvent.click(btnElement)
    // Assert
     const changedText = screen.getByText("Text was changed");
     expect(changedText).toBeInTheDocument();
   });

    test("Text-It's good to see you! not visible after button clicked", () => {
      //  Arrange
      render(<Greeting />);
      // Act
      const btnElement = screen.getByRole("button");
      userEvent.click(btnElement);
      // Assert
      const textEl = screen.queryByText("It's good to see you!");
      expect(textEl).toBeNull();
    });


})

