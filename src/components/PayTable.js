import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { prizeObject } from '../symbols'

//images

import bar_img from '../images/BAR.png'
import twobar_img from '../images/2xBAR.png'
import threebar_img from '../images/3xBAR.png'
import seven_img from '../images/7.png'
import cherry_img from '../images/Cherry.png'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 100,
  },
}));

function createData(name, prize, image) {
  return { name, prize, image };
}

const rows = [
  createData('Combination Any Line', 5, [bar_img,bar_img,'']),
  createData('Any Line', 10, [bar_img,bar_img,bar_img],),
  createData('Any Line', 20, [twobar_img,twobar_img,twobar_img]),
  createData('Any Line', 50, [threebar_img,threebar_img,threebar_img]),
  createData('Any Line', 50, [seven_img,seven_img,seven_img]),
  createData('Combination Any Line', 75, [seven_img,cherry_img,'']),
  createData('Top Line', 2000, [cherry_img,cherry_img,cherry_img]),
  createData('Center Line', 1000, [cherry_img,cherry_img,cherry_img]),
  createData('Bottom Line', 4000, [cherry_img,cherry_img,cherry_img]),
];

const  PayTable = () => {
  const classes = useStyles();
  

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Pay Table</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row}>
              <TableCell component="th" scope="row">  
                <div>
                  <img src={row.image[0]} className="img-icon"/>
                  <img src={row.image[1]} className="img-icon"/>
                  <img src={row.image[2]} className="img-icon"/>
                </div>
              </TableCell>
              <TableCell align="left">{row.name} <b>{row.prize}</b></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default PayTable;