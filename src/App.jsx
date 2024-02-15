import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./features/login/Login"
import Dashboard from "./features/dashboard/Dashboard"
import TableReservation from "./features/tableReservation/TableReservation"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/table-reservation" element={<TableReservation />} />
      </Routes>
    </Router>
  )
}

export default App
