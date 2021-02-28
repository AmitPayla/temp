import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useTable, usePagination } from 'react-table'
 
function LeadList() {
  const [loadingData, setLoadingData] = useState(true);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function getData() {
      const $ = window.$;
      var preLoder = $("#preloader");
      preLoder.fadeIn(0);
      await axios.get(
        process.env.REACT_APP_CLIENT_ID+'leads/created',
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
        Header: 'Lead Id',
        accessor: 'leadId', // accessor is the "key" in the data
      },
      {
        Header: 'Created Date',
        accessor: 'createdAt',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Destination',
        accessor: 'destinationId',
      },
      {
        Header: 'Status',
        accessor: 'leadStatus.status',
      },
      
    ],
    []
  )

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
    <table {...getTableProps()} class="table table-sm table-bordered">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                scope="col"
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    <div  className="mt-1">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="btn btn-secondary">
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage} className="btn btn-secondary">
          Previous
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage} className="btn btn-secondary">
          Next
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="btn btn-secondary">
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:
          <div class="form-row mt-1">
            <div class="col-2">
            <input
                  class="form-control"
                    type='number'
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                      const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                      gotoPage(pageNumber)
                    }}
                  />
            </div>
          <div class="col-3">
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
        </span>
        
      </div>
    </>
  )
}

export default LeadList;