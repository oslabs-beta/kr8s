import React, { useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

// DUMMY DATA THAT SHOULD FLOW DOWN FROM PROPS
// const nodesHeaders = [
//   { id: 'nodes', label: 'Nodes', minWidth: 100},
//   { id: 'ready', label: 'Ready', minWidth: 100 },
//   { id: 'memorypressure', label: 'MemoryPressure', minWidth: 100 },
//   { id: 'diskpressure', label: 'DiskPressure', minWidth: 100 }]

// const nodesValues = [{nodes: 'node1', ready: 'true', memorypressure: 'good', diskpressure: 'high'},
//   {nodes: 'node2', ready: 'false', memorypressure: 'bad', diskpressure: 'high'},
//   {nodes: 'node3', ready: 'true', memorypressure: 'good', diskpressure: 'high'}]

// const podsHeaders = [{ id: 'pods', label: 'Pods', minWidth: 100 }]
// const podsValues = [{pods: 'pod1'}, {pods: 'pod2'}, {pods: 'pod3'}]

// const listValueHeaders = nodesHeaders
// const listValue = nodesValues

export default function List(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        background: "rgb(30,30,30)",
        color: "white",
        border: "2px solid #31A72B",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {props.listValueHeaders.map((header) => (
                <TableCell
                  key={header.id}
                  align={header.align}
                  style={{ minWidth: header.minWidth }}
                  sx={{
                    background: "rgb(30,30,30)",
                    color: "#daa71d",
                    fontWeight: "bold",
                  }}
                >
                  {header.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.listValue
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {props.listValueHeaders.map((header) => {
                      const value = row[header.id];
                      return (
                        <TableCell
                          key={header.id}
                          align={header.align}
                          sx={{ color: "white" }}
                        >
                          {header.format && typeof value === "number"
                            ? header.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.listValue.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          color: "white",
          "& .MuiTablePagination-selectIcon": {
            color: "white",
          },
          "& .MuiSvgIcon-root": {
            color: "white",
          },
        }}
      />
    </Paper>
  );
}
