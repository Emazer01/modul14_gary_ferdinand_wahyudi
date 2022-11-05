import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    color: theme.palette.common.white,
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.info.main,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 3,
  },
}));

function createData(TITLE, SUBTITLE, ISBN, PRICE, IMAGE, URL) {
  return { TITLE, SUBTITLE, ISBN, PRICE, IMAGE, URL};
}

const rows = [
  createData('Introduction to Algorithms', 
    'Fourth Edition', 
    9780262046305, 
    '$135', 
    'https://mit-press-us.imgix.net/covers/9780262046305.jpg?auto=format&w=298&dpr=1&q=20', 
    'https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/'),
  createData('The Pragmatic Programmer', 
    '20th Anniversary Edition', 
    9780135957059, 
    '$39.99', 
    'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20_hu7d9a813cf46675dfb7b1bf4930cee733_2802494_375x0_resize_q75_box.jpg', 
    'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/'),
  createData('Head First PHP & MySQL', 
    '-', 
    9780596006303, 
    '$39.99', 
    'https://books.google.co.id/books/content?id=nJWN1dyxaJIC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE7044FBgSs7Aq3FNyO1sX3_9GuM6GofF1QxjOdPbjVLMQI1i9OwkpQ7FHe7CjZ5AYCrSk9g8SWEvdWwWsdL6yWjJSSPB5PkkApIIY7Bg4MAP03kaeioRIC5B9elcwt66tS8XVOvI', 
    'https://www.oreilly.com/library/view/head-first-php/9780596157739/'),
  createData('Effective Objective-C 2.0', 
    '52 Specific Ways to Improve Your iOS and OS X Programs', 
    9780133386950, 
    '$45', 
    'https://m.media-amazon.com/images/I/41Wo2YXtI8L._SX378_BO1,204,203,200_.jpg', 
    'https://www.effectiveobjectivec.com/'),
  createData('Clean Code', 
    'A Handbook of Agile Software Craftsmanship', 
    9780136083238, 
    '$45', 
    'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg', 
    'https://www.oreilly.com/library/view/clean-code-a/9780136083238/'),

];

export default function Body() {
  return (
    <div className='card'>
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell><h2>TITLE</h2></StyledTableCell>
                        <StyledTableCell align="center"><h2>SUBTITLE</h2></StyledTableCell>
                        <StyledTableCell align="center"><h2>ISBN</h2></StyledTableCell>
                        <StyledTableCell align="center"><h2>PRICE</h2></StyledTableCell>
                        <StyledTableCell align="center"><h2>IMAGE</h2></StyledTableCell>
                        <StyledTableCell align="center"><h2>URL</h2></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.TITLE}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.SUBTITLE}</StyledTableCell>
                            <StyledTableCell align="center">{row.ISBN}</StyledTableCell>
                            <StyledTableCell align="center">{row.PRICE}</StyledTableCell>
                            <StyledTableCell align="center"><img src={row.IMAGE} /></StyledTableCell>
                            <StyledTableCell align="center"><a href={row.URL}>More Info!</a></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}
