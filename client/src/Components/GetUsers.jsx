import React, { useEffect, useState } from "react"; // eslint-disable-next-line
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    headerClassName: "data-grid-header",
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 300,
    headerClassName: "data-grid-header",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 250,
    headerClassName: "data-grid-header",
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
    headerClassName: "data-grid-header",
  },
  {
    field: "password",
    headerName: "password",
    width: 300,
    headerClassName: "data-grid-header",
  },
];

function GetUsers() {
  // eslint-disable-next-line
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <div>
      {" "}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          density="compact"
          components={{ Toolbar: GridToolbar }}
          // checkboxSelection
        />
      </div>
      {/* {users.map((val, i) => {
        return (
          <div key={i}>
            {i + 1}. {val.firstName} ----- "{val.email}"
          </div>
        );
      })} */}
    </div>
  );
}

export default GetUsers;
