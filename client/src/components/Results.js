import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Table from "@mui/material/Table";
import TablePagination from "@mui/material/TablePagination";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";

import { useLocation } from "react-router-dom";

const data = [
  {
    timestamp: "24/11/2021 22:33:08",
    title: "2021 Newest Dell Inspiron 5515 Touch Lap...",
    price: "$1,029.00",
    website: "amazon",
    link: "www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A09328651DRJSCF6QY9WN&url=%2FDell-5515-Touchscreen-i7-1065G7-Fingerprint%2Fdp%2FB098H2JNL4%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Ddell%26qid%3D1637811187%26sr%3D8-1-spons%26psc%3D1&qualifier=1637811187&id=6774722380455436&widgetName=sp_atf"
  },
  {
    timestamp: "24/11/2021 22:33:08",
    title: "Dell Vostro 14 3400 Business Laptop Comp...",
    price: "$1,389.00",
    website: "amazon",
    link: "www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A02997633HO9OJMOS9HIO&url=%2FDell-14-3400-Anti-Glare-Quad-Core%2Fdp%2FB098NMVTJ1%2Fref%3Dsr_1_2_sspa%3Fkeywords%3Ddell%26qid%3D1637811187%26sr%3D8-2-spons%26psc%3D1&qualifier=1637811187&id=6774722380455436&widgetName=sp_atf"
  },
  {
    timestamp: "24/11/2021 22:33:08",
    title: "Dell Inspiron 15 5510, 15.6-inch FHD Non...",
    price: "$679.98",
    website: "amazon",
    link: "www.amazon.com/Dell-Inspiron-5510-Laptop-Notebook/dp/B08QN5J2DY/ref=sr_1_3?keywords=dell&qid=1637811187&qsid=145-9917619-3685023&sr=8-3&sres=B08QN5J2DY%2CB09J76DLQH%2CB08ML2PW6W%2CB08HSNRFTX%2CB09JR3QVBD%2CB08X1KKVCZ%2CB08X1D9WWJ%2CB08BS5LW7X%2CB09HJFTY8K%2CB097LS9518%2CB08FMY7SKC%2CB07TB9G2R6%2CB091H25DJ2%2CB0928N6TH3%2CB08QN2X5YK%2CB08YC8LPPK&srpt=NOTEBOOK_COMPUTER"
  },
  {
    timestamp: "24/11/2021 22:33:08",
    title: "Dell Inspiron 15 3000 Business Laptop (2...",
    price: "$549.00",
    website: "amazon",
    link: "www.amazon.com/Dell-Inspiron-Dual-Core-Processor-Bluetooth/dp/B09J76DLQH/ref=sr_1_4?keywords=dell&qid=1637811187&qsid=145-9917619-3685023&sr=8-4&sres=B08QN5J2DY%2CB09J76DLQH%2CB08ML2PW6W%2CB08HSNRFTX%2CB09JR3QVBD%2CB08X1KKVCZ%2CB08X1D9WWJ%2CB08BS5LW7X%2CB09HJFTY8K%2CB097LS9518%2CB08FMY7SKC%2CB07TB9G2R6%2CB091H25DJ2%2CB0928N6TH3%2CB08QN2X5YK%2CB08YC8LPPK&srpt=NOTEBOOK_COMPUTER"
  },
  {
    timestamp: "24/11/2021 22:33:08",
    title: "Dell XPS 13 (9310), 13.4- inch FHD+ Touc...",
    price: "$1,599.99",
    website: "amazon",
    link: "www.amazon.com/Dell-13-4-inch-Touch-Laptop/dp/B08ML2PW6W/ref=sr_1_5?keywords=dell&qid=1637811187&qsid=145-9917619-3685023&sr=8-5&sres=B08QN5J2DY%2CB09J76DLQH%2CB08ML2PW6W%2CB08HSNRFTX%2CB09JR3QVBD%2CB08X1KKVCZ%2CB08X1D9WWJ%2CB08BS5LW7X%2CB09HJFTY8K%2CB097LS9518%2CB08FMY7SKC%2CB07TB9G2R6%2CB091H25DJ2%2CB0928N6TH3%2CB08QN2X5YK%2CB08YC8LPPK&srpt=NOTEBOOK_COMPUTER"
  },
  {
    timestamp: "24/11/2021 22:33:08",
    title: "Dell Inspiron 3583 15” Laptop Intel Cele...",
    price: "$334.00",
    website: "amazon",
    link: "www.amazon.com/Dell-Inspiron-3583-Laptop-Celeron/dp/B08HSNRFTX/ref=sr_1_6?keywords=dell&qid=1637811187&qsid=145-9917619-3685023&sr=8-6&sres=B08QN5J2DY%2CB09J76DLQH%2CB08ML2PW6W%2CB08HSNRFTX%2CB09JR3QVBD%2CB08X1KKVCZ%2CB08X1D9WWJ%2CB08BS5LW7X%2CB09HJFTY8K%2CB097LS9518%2CB08FMY7SKC%2CB07TB9G2R6%2CB091H25DJ2%2CB0928N6TH3%2CB08QN2X5YK%2CB08YC8LPPK&srpt=NOTEBOOK_COMPUTER"
  },
  {
    timestamp: "24/11/2021 22:33:08",
    title: "Dell Inspiron 7700 All in One Desktop 27...",
    price: "$1,399.99",
    website: "amazon",
    link: "www.amazon.com/Dell-7700-Touchscreen-i7-1165G7-Processor/dp/B09JR3QVBD/ref=sr_1_7?keywords=dell&qid=1637811187&qsid=145-9917619-3685023&sr=8-7&sres=B08QN5J2DY%2CB09J76DLQH%2CB08ML2PW6W%2CB08HSNRFTX%2CB09JR3QVBD%2CB08X1KKVCZ%2CB08X1D9WWJ%2CB08BS5LW7X%2CB09HJFTY8K%2CB097LS9518%2CB08FMY7SKC%2CB07TB9G2R6%2CB091H25DJ2%2CB0928N6TH3%2CB08QN2X5YK%2CB08YC8LPPK&srpt=NOTEBOOK_COMPUTER"
  },
  {
    timestamp: "24/11/2021 22:33:08",
    title: "Dell Optiplex 7050 SFF Desktop PC Intel ...",
    price: "$569.99",
    website: "amazon",
    link: "www.amazon.com/Dell-Optiplex-Desktop-Excellent-Condition/dp/B08X1KKVCZ/ref=sr_1_8?keywords=dell&qid=1637811187&qsid=145-9917619-3685023&sr=8-8&sres=B08QN5J2DY%2CB09J76DLQH%2CB08ML2PW6W%2CB08HSNRFTX%2CB09JR3QVBD%2CB08X1KKVCZ%2CB08X1D9WWJ%2CB08BS5LW7X%2CB09HJFTY8K%2CB097LS9518%2CB08FMY7SKC%2CB07TB9G2R6%2CB091H25DJ2%2CB0928N6TH3%2CB08QN2X5YK%2CB08YC8LPPK&srpt=NOTEBOOK_COMPUTER"
  },
  {
    timestamp: "24/11/2021 22:33:08",
    title: "2021 Newest Dell Inspiron 3000 Laptop, 1...",
    price: "$439.00",
    website: "amazon",
    link: "www.amazon.com/Dell-Inspiron-LED-Backlit-Processor-Bluetooth/dp/B08X1D9WWJ/ref=sr_1_9?keywords=dell&qid=1637811187&qsid=145-9917619-3685023&sr=8-9&sres=B08QN5J2DY%2CB09J76DLQH%2CB08ML2PW6W%2CB08HSNRFTX%2CB09JR3QVBD%2CB08X1KKVCZ%2CB08X1D9WWJ%2CB08BS5LW7X%2CB09HJFTY8K%2CB097LS9518%2CB08FMY7SKC%2CB07TB9G2R6%2CB091H25DJ2%2CB0928N6TH3%2CB08QN2X5YK%2CB08YC8LPPK&srpt=NOTEBOOK_COMPUTER"
  },
  {
    timestamp: "24/11/2021 22:33:08",
    title: "Dell Inspiron 3880 Desktop Computer - In...",
    price: "$818.00",
    website: "amazon",
    link: "www.amazon.com/Dell-Inspiron-Desktop-3880-Site/dp/B08BS5LW7X/ref=sr_1_10?keywords=dell&qid=1637811187&qsid=145-9917619-3685023&sr=8-10&sres=B08QN5J2DY%2CB09J76DLQH%2CB08ML2PW6W%2CB08HSNRFTX%2CB09JR3QVBD%2CB08X1KKVCZ%2CB08X1D9WWJ%2CB08BS5LW7X%2CB09HJFTY8K%2CB097LS9518%2CB08FMY7SKC%2CB07TB9G2R6%2CB091H25DJ2%2CB0928N6TH3%2CB08QN2X5YK%2CB08YC8LPPK&srpt=NOTEBOOK_COMPUTER"
  },
  {
    timestamp: "24/11/2021 22:33:08",
    title: "Dell Optiplex 7050 SFF Desktop PC Intel ...",
    price: "$569.99",
    website: "amazon",
    link: "www.amazon.com/Dell-Optiplex-Desktop-Excellent-Condition/dp/B08X1KKVCZ/ref=sr_1_8?keywords=dell&qid=1637811187&qsid=145-9917619-3685023&sr=8-8&sres=B08QN5J2DY%2CB09J76DLQH%2CB08ML2PW6W%2CB08HSNRFTX%2CB09JR3QVBD%2CB08X1KKVCZ%2CB08X1D9WWJ%2CB08BS5LW7X%2CB09HJFTY8K%2CB097LS9518%2CB08FMY7SKC%2CB07TB9G2R6%2CB091H25DJ2%2CB0928N6TH3%2CB08QN2X5YK%2CB08YC8LPPK&srpt=NOTEBOOK_COMPUTER"
  },
  {
    timestamp: "24/11/2021 22:33:08",
    title: "2021 Newest Dell Inspiron 3000 Laptop, 1...",
    price: "$439.00",
    website: "amazon",
    link: "www.amazon.com/Dell-Inspiron-LED-Backlit-Processor-Bluetooth/dp/B08X1D9WWJ/ref=sr_1_9?keywords=dell&qid=1637811187&qsid=145-9917619-3685023&sr=8-9&sres=B08QN5J2DY%2CB09J76DLQH%2CB08ML2PW6W%2CB08HSNRFTX%2CB09JR3QVBD%2CB08X1KKVCZ%2CB08X1D9WWJ%2CB08BS5LW7X%2CB09HJFTY8K%2CB097LS9518%2CB08FMY7SKC%2CB07TB9G2R6%2CB091H25DJ2%2CB0928N6TH3%2CB08QN2X5YK%2CB08YC8LPPK&srpt=NOTEBOOK_COMPUTER"
  },
  {
    timestamp: "24/11/2021 22:33:08",
    title: "Dell Inspiron 3880 Desktop Computer - In...",
    price: "$818.00",
    website: "amazon",
    link: "www.amazon.com/Dell-Inspiron-Desktop-3880-Site/dp/B08BS5LW7X/ref=sr_1_10?keywords=dell&qid=1637811187&qsid=145-9917619-3685023&sr=8-10&sres=B08QN5J2DY%2CB09J76DLQH%2CB08ML2PW6W%2CB08HSNRFTX%2CB09JR3QVBD%2CB08X1KKVCZ%2CB08X1D9WWJ%2CB08BS5LW7X%2CB09HJFTY8K%2CB097LS9518%2CB08FMY7SKC%2CB07TB9G2R6%2CB091H25DJ2%2CB0928N6TH3%2CB08QN2X5YK%2CB08YC8LPPK&srpt=NOTEBOOK_COMPUTER"
  }
];

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  pos: {
    marginBottom: 12
  }
});

/**
 * Function to compare two operators a and b
 * @param {*} a dict of items
 * @param {*} b dict of items
 * @param {*} orderBy key to order by
 * @returns
 */
function descendingComparator(a, b, orderBy) {
  if (a[orderBy] == "") a[orderBy] = "$0";
  if (b[orderBy] == "") b[orderBy] = "$0";
  let a_price = a[orderBy].split("$");
  let b_price = b[orderBy].split("$");

  if (parseFloat(b_price[1].replace(/ /g, "")) < parseFloat(a_price[1].replace(/ /g, ""))) {
    return -1;
  }
  if (parseFloat(b_price[1].replace(/ /g, "")) > parseFloat(a_price[1].replace(/ /g, ""))) {
    return 1;
  }
  return 0;
}

/**
 * Function to determine ascending or descending order
 * @param {*} order ascending / descending
 * @param {*} orderBy key to order by
 * @returns
 */
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: "timestamp",
    numeric: false,
    disablePadding: false,
    label: "Timestamp"
  },
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "Title"
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price"
  },
  {
    id: "website",
    numeric: false,
    disablePadding: false,
    label: "Website"
  },
  {
    id: "link",
    numeric: false,
    disablePadding: false,
    label: "Link"
  }
];

/**
 * Builds the table header
 * @param {*} props props passed from the parent component
 * @returns
 */
function EnhancedTableHead(props) {
  const { order, orderBy, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const EnhancedTableToolbar = () => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...{
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
        }
      }}
    >
      <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
        Results
      </Typography>
    </Toolbar>
  );
};

/**
 * Genrates the results table
 * @returns
 */
export default function Results() {
  const location = useLocation();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("price");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  let rows = null;

  if (location.state == null) {
    return (
      <div>
        <h2>{"Search for what you want in the menu page so I can find related information for you!"}</h2>
      </div>
    );
  } else {
    rows = JSON.parse(location.state.response);
    console.log(rows);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getClickableLink = (link) => {
    if (link == null) {
      return "";
    } else {
      return link.startsWith("http://") || link.startsWith("https://") ? link : `//${link}`;
    }
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  // const classes = useStyles();

  console.log(rows);
  if (rows == null) {
    return (
      <div>
        <h2>{"Oops I couldn't find what you are looking for! :/"}</h2>
      </div>
    );
  } else {
    return (
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar />
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={"medium"}>
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {rows
                  .slice()
                  .sort(getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow key={index}>
                        <TableCell component="th" id={labelId} scope="row" align="center" padding="none">
                          {row.timestamp}
                        </TableCell>
                        <TableCell align="center">{row.title}</TableCell>
                        <TableCell align="center">{row.price}</TableCell>
                        <TableCell align="center">{row.website}</TableCell>
                        <TableCell align="center">
                          {row.link == null ? (
                            "No link"
                          ) : (
                            <Link href={getClickableLink(row.link)} target="_blank" rel="noopener">
                              Link
                            </Link>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    );
  }
 
}
