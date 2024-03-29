import { render, screen } from "../../../test-utils/testing-library-utils";

import Options from "../Options";

test("displays image for each scoop from the server", async () => {
  render(<Options optionType='scoops' />);

  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });

  expect(scoopImages).toHaveLength(2);

  const altTextScoops = scoopImages.map((el) => el.alt);

  expect(altTextScoops).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each toppings from the server", async () => {
  render(<Options optionType='toppings' />);

  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });

  expect(toppingImages).toHaveLength(3);

  const altTextToppings = toppingImages.map((el) => el.alt);

  expect(altTextToppings).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
