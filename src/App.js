import student from "./students.json";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App() {
  const studentsWithTotal = student.students.map((s) => ({
    ...s,
    totalMarks: s.marks.maths + s.marks.physics + s.marks.chemistry
  }));

  studentsWithTotal.sort((a, b) => b.totalMarks - a.totalMarks);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ranking</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Maths</TableCell>
            <TableCell align="right">Physics</TableCell>
            <TableCell align="right">Chemistry</TableCell>
            <TableCell align="right">Total Marks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsWithTotal.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.marks.maths}</TableCell>
              <TableCell align="right">{row.marks.physics}</TableCell>
              <TableCell align="right">{row.marks.chemistry}</TableCell>
              <TableCell align="right">{row.totalMarks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
