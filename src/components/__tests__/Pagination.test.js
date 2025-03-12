import Pagination from "../Pagination";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should renders pagination component", () => {
    let setCurrentPage = jest.fn();
    let setPageSize = jest.fn();
    let setIsLoading = jest.fn();

    render(
      <Pagination
        totalNoOfPages={5}
        currentPage={0}
        setCurrentPage={setCurrentPage}
        pageSize={5}
        setPageSize={setPageSize}
        setIsLoading={setIsLoading}
      />
    );

    const pageButtons = screen.getAllByRole('button', { name: /go to page/i });
    expect(pageButtons).toHaveLength(5);

    const prevButton = screen.getByLabelText(/Previous page/i);
    const nextButton = screen.getByLabelText(/Next page/i);

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
});