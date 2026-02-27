import "./grid.css"
import mockdata from "./mockdata.json"

const headers = mockdata.length > 0 ? Object.keys(mockdata[0]) : []

function SearchBar() {
    //Search Bar
  return (
    <form>
      <input type="text" placeholder="Search..." />
    </form>
  );
}

function Filter() {

    //Filter button which opens dropdown to filter by status
    function clickFilter(){

    }
    return(
        <button onClick={clickFilter}>Filter</button>
    )
}

function Status(item){
    //Dropdwon which shows status of application, updates to json on change
    const currentStatus = item.Status;
    const statusOptions = ["Applied", "Interview", "Offer", "Rejected"];

    const options = [];
    for (let i = 0; i < statusOptions.length; i++) {
        options.push(<option value={statusOptions[i]} selected={statusOptions[i] === currentStatus}>{statusOptions[i]}</option>)
    }   

    return(
        <select>{options}</select>
    )
}

function popup(popup){
    //popup displays user notes, can be edited and updated to json

}
function Notes(item){
    //Notes button opens popup to show notes
    return(
        <div className="NotePopup"onclick="popup()">Notes
            <span className="NotePopupText">{item.Notes}</span>
        </div>
    )
}

function Headers() {
  return (
    <tr>
      {headers.map((header) => (
        <th key={header}>
          {header}
        </th>
      ))}
    </tr>
  );
}

function jobRows({ item }) {
    //Creates a row for each job application

    return (
        <tr>
            <td>{item.Company}</td>
            <td>{item.Position}</td>
            <td>{Status(item)}</td>
            <td>{parseFloat(item.DateApplied)}</td>
            <td>{Notes(item)}</td>
        </tr>
    );
}
function jobGrid() {
    let rows = [];
    //Iterate through json to create rows 
    for (let i = 0; i < mockdata.length; i++) {
        rows.push(jobRows({item: mockdata[i]}))
    }

    return (
        //Put everything together
        <>
            <div className="Controls">

                <button>Filter</button>
                {SearchBar()}
                <button>Import</button>
                <button>Edit</button>

            </div>

            <table>
                <thead>{Headers()}</thead>
                <tbody>{rows}</tbody>
            </table>
        </>
    )
}
export default jobGrid