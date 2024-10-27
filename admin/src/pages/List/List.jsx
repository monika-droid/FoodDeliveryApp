import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const url = 'http://localhost:4000';
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <TableContainer component={Paper} className="MuiTableContainer-root">
      <Table aria-label="simple table" className="MuiTable-root">
        <TableHead className="MuiTableHead-root">
          <TableRow>
            <TableCell className="MuiTableCell-head">Image</TableCell>
            <TableCell className="MuiTableCell-head">Name</TableCell>
            <TableCell className="MuiTableCell-head">Description</TableCell>
            <TableCell className="MuiTableCell-head">Category</TableCell>
            <TableCell className="MuiTableCell-head">Price</TableCell>
            <TableCell className="MuiTableCell-head">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow key={row.name} className="MuiTableRow-root">
              <TableCell className="MuiTableCell-body">
                <img src={`${url}/images/${row.image}`} alt={row.name} className="table-image" />
              </TableCell>
              <TableCell className="MuiTableCell-body">{row.name}</TableCell>
              <TableCell className="MuiTableCell-body">{row.description}</TableCell>
              <TableCell className="MuiTableCell-body">{row.category}</TableCell>
              <TableCell className="MuiTableCell-body">${row.price}</TableCell>
              <TableCell className="MuiTableCell-body">
                <span className="material-symbols-outlined">delete</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
