import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import useEvent from "@testing-library/user-event";

test("Initial state of the checkbox and button", () => {
  render(<SummaryForm />);
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  const agreeCheckBox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  expect(agreeCheckBox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

test("checkbox enables button first click and disables on second click", () => {
  render(<SummaryForm />);
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  const agreeCheckBox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  useEvent.click(agreeCheckBox);

  expect(confirmButton).toBeEnabled();

  useEvent.click(agreeCheckBox);

  expect(confirmButton).toBeDisabled();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);
  const nullPopOver = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopOver).not.toBeInTheDocument();

  const termsAndConditions = screen.getByText(/terms and conditions/i);

  useEvent.hover(termsAndConditions);

  const popOver = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(popOver).toBeInTheDocument();

  useEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
