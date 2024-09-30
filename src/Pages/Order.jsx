import React, { useState, useMemo } from "react";
import { useTable } from "react-table";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ReactPaginate from "react-paginate";

const Order = () => {
  // State for selected rows
  const [selectedRows, setSelectedRows] = useState([]);

  // Sample data for orders
  const data = useMemo(
    () => [
      { id: "#CM9001", user: "Natali Craig", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress" },
      { id: "#CM9002", user: "Katie Morrison", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete" },
      { id: "#CM9003", user: "Drew Cano", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending" },
      { id: "#CM9004", user: "Orlando Diggs", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved" },
      { id: "#CM9005", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected" },
      // More rows can be added here
    ],
    []
  );

  // Column definitions, declared AFTER selectedRows is defined
  const columns = useMemo(
    () => [
      {
        Header: () => (
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
            onChange={handleSelectAllRows}
          />
        ),
        accessor: "select",
        Cell: ({ row }) => (
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
            checked={selectedRows.includes(row.original.id)}
            onChange={() => handleSelectRow(row.original.id)}
          />
        ),
      },
      { Header: "Order ID", accessor: "id" },
      { Header: "User", accessor: "user" },
      { Header: "Project", accessor: "project" },
      { Header: "Address", accessor: "address" },
      { Header: "Date", accessor: "date" },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <span className={`p-2 rounded-md text-white ${getStatusColor(value)}`}>
            {value}
          </span>
        ),
      },
    ],
    [selectedRows] // This makes sure the columns update when selectedRows changes
  );

  // Hook to get table functionalities
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 5;
  const pageCount = Math.ceil(rows.length / rowsPerPage);
  const displayedRows = rows.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

  // Handle selecting an individual row
  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  // Handle selecting or deselecting all rows
  const handleSelectAllRows = (e) => {
    if (e.target.checked) {
      const allRowIds = rows.map((row) => row.original.id);
      setSelectedRows(allRowIds);
    } else {
      setSelectedRows([]);
    }
  };

  // Handle page change
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  // Function to assign color to status
  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-500";
      case "Complete":
        return "bg-green-500";
      case "Pending":
        return "bg-yellow-500";
      case "Approved":
        return "bg-purple-500";
      case "Rejected":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Order List</h1>
      <table {...getTableProps()} className="min-w-full table-auto border-collapse border border-gray-200 rounded-lg shadow-lg">
        <thead className="bg-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="text-left p-3 border border-gray-200">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {displayedRows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-50">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="p-3 border border-gray-200">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <ReactPaginate
          previousLabel={<FiChevronLeft />}
          nextLabel={<FiChevronRight />}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"flex space-x-2 text-sm"}
          activeClassName={"font-bold text-blue-600"}
          pageClassName={"px-2 py-1 rounded cursor-pointer hover:bg-gray-200"}
          previousClassName={"px-2 py-1 rounded cursor-pointer hover:bg-gray-200"}
          nextClassName={"px-2 py-1 rounded cursor-pointer hover:bg-gray-200"}
        />
      </div>
    </div>
  );
};

export default Order;
