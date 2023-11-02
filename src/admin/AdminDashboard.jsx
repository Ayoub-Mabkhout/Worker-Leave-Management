import * as React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { MemoryRouter } from "react-router-dom";

const dataProvider = jsonServerProvider("nodejs.ayoubmabmaf.repl.co/api/admin"); // Replace with your API endpoint

const AdminDashboard = ({ user }) => (
  <MemoryRouter initialEntries={["/"]}>
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  </MemoryRouter>
);

export default AdminDashboard;
