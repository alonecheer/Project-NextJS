import MainLayout from '../layouts/MainLayout'
import Link from 'next/link'
import { Input } from 'antd';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
}

const rows = [
    createData(1, 159, 6.0, 24),
    createData(2, 237, 9.0, 37),
    createData(3, 262, 16.0, 24),
    createData(4, 305, 3.7, 67),
    createData(5, 356, 16.0, 49),
];

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 700,
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 50,
        },
    },
}));
function Insert() {
    const classes = useStyles();
    return (
        <div className='bg'>
            <MainLayout />
            <div className="container-fromInsert">
                <div className="fromInsert">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">ลำดับ</StyledTableCell>
                                    <StyledTableCell align="center">รายการ</StyledTableCell>
                                    <StyledTableCell align="center">จำนวน</StyledTableCell>
                                    <StyledTableCell align="center">ราคา</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <form className={classes.root} noValidate autoComplete="off">
                                                <TextField id="standard-basic" label="Input" />
                                            </form>
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                        <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                        <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}
export default Insert;