import "./Dashboard.css"

import jobGrid from "./grid.jsx"

function Dashboard() {
  return (
    <>
    <div className="Dashboard">
      <h2>JobApp Dashboard</h2>
      <button>sign-out</button>
      
    </div>
    {jobGrid()}
    </>
  )
  
}
export default Dashboard
