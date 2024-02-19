import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./features/login/Login"
import Dashboard from "./features/dashboard/Dashboard"
import TableReservation from "./features/tableReservation/TableReservation"
import ChangePassword from "./features/changePassword/ChangePassword"
import ListTable from "./components/listTable/ListTable"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/table-reservation" element={<TableReservation />} />
        <Route path="/ganti-password" element={<ChangePassword />} />
        <Route path="/daftar-pesanan-meja" element={<ListTable />} />
      </Routes>
    </Router>
  )
}

export default App
