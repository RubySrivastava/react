import React, { useState } from "react"
import { take, isFinite, isFunction } from "lodash"

// the row `id` property is required and is needed for the array elements' key property
// which MUST not be an array index and be unique within each table
export type DataTableRow<T> = T & Record<string, any> & { id: string }

export type DataTableRows<T> = Array<DataTableRow<T>>

export interface DataTableColumn<T> {
  key: string
  title: string
  render?: (key: string, item: T) => React.ReactNode
  hoverRender?: (key: string, item: T) => React.ReactNode
}

export type DataTableData<T> = {
  columns: Array<DataTableColumn<T>>
  rows: DataTableRows<T>
}

export interface DataTableProps<T> {
  data: DataTableData<T>
  showColumnTitle?: boolean
  style?: React.CSSProperties
  onClick?: (row: DataTableRow<T>) => void
  placeholder?: string
  firstRowHeader?: boolean
  maxRows?: number | null
}

function DataTable<T>({ data, onClick, style, showColumnTitle, placeholder, firstRowHeader, maxRows = 6}: DataTableProps<T>) {
  const [showAll, setShowAll] = useState(false)
  const useOverflow = isFinite(maxRows) && data.rows.length > (maxRows || 0)

  const rows = useOverflow && !showAll ? take(data.rows, maxRows as number) : data.rows

  return (
    <main style={style}>
      {showColumnTitle && <div className={"Columns"}>
        {data.columns.map((column) => {
          return (
            <div key={column.key} className={"Column"}>
                <header className={"Header"}>{column.title}</header>
            </div>
          )
        })}
      </div>}

      <div className={"Rows"}>
        {rows.map((row, i) => {
          return <DataTableRow key={`row-${row.id}`} headerRow={firstRowHeader && i === 0} onClick={onClick} columns={data.columns} rowData={row} />
        })}
        {!!(useOverflow && rows.length) && (
          <>
            {showAll && (
              <div className={"MinimizeRows"} onClick={() => setShowAll(false)}>
                More
              </div>
            )}
            {!showAll && (
              <div className={"MaximizeRows"} onClick={() => setShowAll(true)}>
                More
              </div>
            )}
          </>
        )}
      </div>
      {!data.rows.length &&
        <div className={"NoDataContainer"}>
          {placeholder || "No data"}
        </div>}
    </main>
  )
}

type DataTableRowProps<T> = {
  headerRow?: boolean
  onClick?: (row: DataTableRow<T>) => void
  columns: Array<DataTableColumn<T>>
  rowData: DataTableRow<T>
  hoverClass?: string
  noBorder?: boolean
  singleRow?: boolean
  noBorderRadius?: boolean
  greyBackground?: boolean
  showMarginBottom?: boolean
}

const DataTableRow: <T extends unknown>(props: DataTableRowProps<T>) => React.ReactElement<DataTableRowProps<T>> = ({ columns, onClick, rowData, hoverClass, noBorder, singleRow, noBorderRadius, greyBackground, showMarginBottom, headerRow }) => {
  const [hoverState, setHoverState] = useState(false)

  return (
    <div
      className={"Row"}
      onClick={() => {
        if (onClick && !headerRow) {
          onClick(rowData)
        }
      }}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >

      {columns.map((column) => {
        let columnValue;

        if (hoverState && column.hoverRender) {
          columnValue = column.hoverRender ? column.hoverRender(column.key, rowData) : rowData[column.key]
        } else {
          columnValue = column.render ? column.render(column.key, rowData) : rowData[column.key]
        }

        return (
          <div key={column.key} className={"Cell"}>
            {columnValue}
          </div>
        )
      })}
    </div>
  )
}

export default DataTable
