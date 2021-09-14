import { useEffect, useState } from "react"
import './Assignment.css';
import DataTable, { DataTableData } from './components/DataTable';
import { getHosts } from "./api/endpoints"

function Assignment() {

  const [loading, setLoading] = useState(true)
  const [hostData, setHostData] = useState<DataTableData<Record<string, string>>>({
    columns: [
      {key:'id', 'title': "System Id"},
      {key:'name', 'title': "System Name"},
      {key:'description', 'title': "Description"}
    ],
    rows: []
  });

  useEffect(() => {
    getHosts().then((response) => {
      const rows = response['data']
      setHostData( prevState => {
        return {
          ...prevState,
          rows,
        }
      })
      setLoading(false)
    })
    .catch(() => {
      setLoading(false)
    })
  }, [loading])


  return (
    <div className="Assignment">
      <h1>NUC Hosts</h1>
      { loading ?
        "loading..." : (
          <DataTable
            data={hostData}
            firstRowHeader={true}
            showColumnTitle={true}
            style={{width: 450}} />
        )
      }
    </div>
  );
}

export default Assignment;