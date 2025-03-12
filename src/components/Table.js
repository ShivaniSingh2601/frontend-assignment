import React, { useEffect, useState } from "react";
import { TABLE_DATA_API } from "../utils/constants";
import Pagination from "./Pagination";

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [pageSize]);

  const fetchData = async () => {
    const response = await fetch(TABLE_DATA_API);
    const data = await response.json();
    setTableData(data);
    setIsLoading(false);
  };

  const totalNoOfPages = Math.ceil(tableData.length / pageSize);
  const start = currentPage * pageSize;
  const end = start + pageSize;

  return (
    <div className="content-body">
      {isLoading ? (
        <div className="transform-center-align loader-wrapper">
          <p>Loading....</p>
        </div>
      ) : (
        <>
          <table className="w-100">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Percentage funded</th>
                <th>Amount pledged</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.slice(start, end)?.map((data) => (
                <tr key={data["s.no"]}>
                  <td>{data["s.no"]}</td>
                  <td>{data["percentage.funded"]}</td>
                  <td>{data["amt.pledged"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            totalNoOfPages={totalNoOfPages}
            setIsLoading={setIsLoading}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
          />
        </>
      )}
    </div>
  );
};

export default Table;
