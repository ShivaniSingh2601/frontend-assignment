import Header from "../Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
  
it("Should render header component with img", () => {
  render(<Header />);
  const headerImg = screen.getByRole("img");
  expect(headerImg).toBeInTheDocument();
});

it("Should renders the header logo with correct image source", () => {
  render(<Header />);
  const headerImgUrl = screen.getByRole('img');
  expect(headerImgUrl).toHaveAttribute('src', "https://cdn.prod.website-files.com/60c6002b3fee00bd705d0f75/6101838f56905bbb3a3d3a50_green-logo.svg");
});