import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useTable, usePagination } from 'react-table'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import '../../index.css'
 
function OrderList() {
  const [loadingData, setLoadingData] = useState(true);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function getData() {
      const $ = window.$;
      var preLoder = $("#preloader");
      preLoder.fadeIn(0);
      await axios.get(
        process.env.REACT_APP_CLIENT_ID+'orders/all/users',
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
        }
      ).then((response) => {
          console.log(response.data.data);
          setOrders(response.data.data);
          preLoder.fadeOut(0);
        });
    }
    if (loadingData) {
      getData();
    }
  }, []);

  const data = React.useMemo(
    () => orders
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Order Id',
        accessor: '_id', // accessor is the "key" in the data
      },
      {
        Header: 'From Date',
        accessor: 'fromDate',
      },
      {
        Header: 'To Date',
        accessor: 'toDate',
      },
      {
        Header: 'Amount(INR)',
        accessor: 'amount',
      },
      {
        Header: 'Message',
        accessor: 'message'
      },
      {
        Header: 'Total Person',
        accessor: 'totalPerson'
      },
     
    ],
    []
  )

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    usePagination
    )
    const { pageIndex, pageSize } = state

  return (
    <>
    <MaUTable {...getTableProps()} class="table table-md table-bordered">
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <StyledTableCell
                {...column.getHeaderProps()}
                scope="col"
              >
                <div>{column.render('Header')}</div>
              </StyledTableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {page.map(row => {
          prepareRow(row)
          return (
            <StyledTableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TableCell
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </TableCell>
                )
              })}
            </StyledTableRow>
          )
        })}
      </TableBody>
    </MaUTable>
    {/* <div className=" mt-1 pagination" >
      <div >
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="btn btn-yellow pagination-button" style={{marginRight: 15}}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage} className=" btn btn-yellow pagination-button">
          P
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage} className="btn btn-yellow pagination-button">
          N
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="btn btn-yellow pagination-button" style={{marginLeft: 15}}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
      </div>
       
         
          <div class="form-row mt-1" style={{justifyContent:'center'}}>
          Go to page:
            <span style={{width : '15%'}}>
            <input
                  class="form-control"
                    type='number'
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                      const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                      gotoPage(pageNumber)
                    }}
                  />
            </span>
          <div>
          <select
              class="form-control"
                value={pageSize}
                onChange={e => setPageSize(Number(e.target.value))}>
                {[10, 25, 50].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
          </div>
          </div>
        
       
      </div> */}
    </>
  )
}

export default OrderList;