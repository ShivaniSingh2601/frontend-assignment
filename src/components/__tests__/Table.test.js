import Table from "../Table";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA  from "../mocks/mockTableData.json" 
import { act } from "react";

global.fetch = jest.fn(()=>
    {
      return Promise.resolve({
        json: () => {
          return Promise.resolve(MOCK_DATA);
        },
      });
    }
)

it("Should fetches and displays data correctly", async () => {
  await act(async () => render(<Table />));
  expect(screen.getByText("S.No.")).toBeInTheDocument();
  expect(screen.getByText("Percentage funded")).toBeInTheDocument();
  expect(screen.getByText("Amount pledged")).toBeInTheDocument();
});

it("Should handles pagination correctly", async () => {
  await act(async () => render(<Table />));
  expect(screen.getAllByRole("row").length).toBe(6); 
});