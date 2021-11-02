import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import styles from "../assets/css/List.module.css";

// DUMMY DATA THAT SHOULD FLOW DOWN FROM PROPS
// const nodesHeaders = [
//   { id: 'node', label: 'Node', minWidth: 100},
//   { id: 'ready', label: 'Ready', minWidth: 100 },
//   { id: 'memorypressure', label: 'MemoryPressure', minWidth: 100 },
//   { id: 'diskpressure', label: 'DiskPressure', minWidth: 100 },
//   { id: 'pidPressure', label: 'PID Pressure', minWidth: 100 }
// ];

// const nodesValues = [{nodes: 'node1', ready: 'true', memorypressure: 'good', diskpressure: 'high'},
//   {nodes: 'node2', ready: 'false', memorypressure: 'bad', diskpressure: 'high'},
//   {nodes: 'node3', ready: 'true', memorypressure: 'good', diskpressure: 'high'}]

// const podsHeaders = [
//   { id: 'pods', label: 'Pods', minWidth: 100 }
//   { id: 'initialized', label: 'Initialized', minWidth: 100 },
//   { id: 'ready', label: 'Ready', minWidth: 100 },
//   { id: 'containersReady', label: 'Containers Ready', minWidth: 100 },
//   { id: 'podScheduled', label: 'Pod Scheduled', minWidth: 100 },
//   { id: 'numContainers', label: 'Number of Containers', minWidth: 100 }]

// const podsValues = [
//    {pods: 'pod1', initialized: 'true', ready: 'true', containersReady: 'true', podScheduled: 'true', numContainers: 3}
//    {pods: 'pod2', initialized: 'true', ready: 'true', containersReady: 'false', podScheduled: 'true', numContainers: 1}
//    {pods: 'pod3', initialized: 'true', ready: 'false', containersReady: 'true', podScheduled: 'true', numContainers: 6}
//   ]

// const listValueHeaders = nodesHeaders
// const listValue = nodesValues

export default function List(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rowName, setRowName] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function handleClick(e) {
    e.preventDefault();
    props.setCurrentTarget(e.target.textContent);
    setRowName(e.target.textContent);
    return;
  }

  if (rowName.length && props.reroute) {
    return (
      <Redirect
        to={{
          pathname: props.reroute,
          state: { name: rowName, info: props.info },
        }}
      />
    );
  }

  return (
    <Paper
      sx={{
        width: "90%",
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
                if (props.reroute) {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {props.listValueHeaders.map((header) => {
                        const value = row[header.id];
                        return (
                          <TableCell
                            key={row.code + header.id}
                            align={header.align}
                            sx={{ color: "white" }}
                          >
                            <a
                              href=""
                              onClick={handleClick}
                              className={styles.rows}
                            >
                              {header.format && typeof value === "number"
                                ? header.format(value)
                                : value}
                            </a>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                } else {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {props.listValueHeaders.map((header) => {
                        const value = row[header.id];
                        return (
                          <TableCell
                            key={row.code + header.id}
                            align={header.align}
                            sx={{ color: "white" }}
                          >
                            <a className={styles.rows}>
                              {header.format && typeof value === "number"
                                ? header.format(value)
                                : value}
                            </a>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                }
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
