
import { React, Fragment } from "react";
import { useEffect, useState, useRef } from "react";
import Footer from './Footer';
import axios from "axios";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

// we will build a table here

/* 
we will also fetch data and return all users here using map function
*/
const users_per_page = 10;

let initial_page_filter = [];

function ListTable({ query }) {

  const [userList, updateUserList] = useState([])

  const [query_tracker, updatequeryTracker] = useState(query);

  const [currentpageNumber, updatePageNumber] = useState(1);

  const [edited_record_id, updateEditedRecord_id] = useState(null);

  const [edit_row_data, set_edit_row_data] = useState({
    name: "",
    email: "",
    role: ""
  });

  const [isChecked, set_is_checked] = useState([])

  useEffect(function () {
    axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json").then((response) => updateUserList(response.data)).catch((error) => console.log(error));

    set_is_checked([])
  }, []);

  useEffect(function () {
    updatequeryTracker(query);
    updatePageNumber(1)
    set_is_checked([])

  }, [query]);

  let filteredUsers =
    userList.filter((entry) => {
      if (query === "")
        return entry;


      if (entry.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
        return entry;

      if (entry.email.toLowerCase().indexOf(query.toLowerCase()) > -1)
        return entry;

      if (entry.role.toLowerCase().indexOf(query.toLowerCase()) > -1)
        return entry;
    })

  const [userFiltered, updateuserFiltered] = useState(filteredUsers);

  function updatefilterCount(pagenumber) {
    updatePageNumber(pagenumber);
    updateuserFiltered(filteredUsers.slice((pagenumber - 1) * (users_per_page), ((pagenumber - 1) * (users_per_page) + users_per_page)));
    updatequeryTracker("NO_query_update");
    set_is_checked([])
  }

  initial_page_filter = filteredUsers.slice((currentpageNumber - 1) * (users_per_page), ((currentpageNumber - 1) * (users_per_page) + users_per_page));

  function rowEditClick(event, record) {
    event.preventDefault();
    set_is_checked([])
    updateEditedRecord_id(record.id);
    const oldRowValues = {
      name: record.name,
      email: record.email,
      role: record.role
    }
    set_edit_row_data(oldRowValues)
  }

  function rowEditChange(event) {
    event.preventDefault();
    const edited_field_name = event.target.name;
    const new_field_value = event.target.value;

    const newRowData = { ...edit_row_data };
    newRowData[edited_field_name] = new_field_value;
    set_edit_row_data(newRowData);
  }

  function rowEditSave(event) {
    event.preventDefault();

    const editedRecord = {
      id: edited_record_id,
      name: edit_row_data.name,
      email: edit_row_data.email,
      role: edit_row_data.role,
    }
    const newRowdata = [...userList]
    const index = userList.findIndex((record) => edited_record_id == record.id)
    newRowdata[index] = editedRecord;
    updateUserList(newRowdata);
    updateuserFiltered(newRowdata.slice((currentpageNumber - 1) * (users_per_page), ((currentpageNumber - 1) * (users_per_page) + users_per_page)));
    updateEditedRecord_id(null);

  }

  function rowEditCancel(event) {
    event.preventDefault();
        updateEditedRecord_id(null);
  
  }

  function rowDelete(event, deleted_record_id) {
    event.preventDefault();
    set_is_checked([])
    const newUserList = [...userList];
    const index = userList.findIndex((record) => record.id == deleted_record_id);
    newUserList.splice(index, 1);
    updateUserList(newUserList);

    filteredUsers =
    newUserList.filter((entry) => {
      if (query === "")
        return entry;


      if (entry.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
        return entry;

      if (entry.email.toLowerCase().indexOf(query.toLowerCase()) > -1)
        return entry;

      if (entry.role.toLowerCase().indexOf(query.toLowerCase()) > -1)
        return entry;
    })
    //newUserList.filter(()
   updateuserFiltered(filteredUsers.slice((currentpageNumber - 1) * (users_per_page), ((currentpageNumber - 1) * (users_per_page) + users_per_page)));
  }

  function selectAllCheckbox(checked_or_not) {
    if (checked_or_not === true) {
      if ((userFiltered.length === 0) || ((userFiltered.length > 0) && (query_tracker !== "NO_query_update"))) {

        set_is_checked((initial_page_filter.slice(0, initial_page_filter.length).map((record) => record.id)))
      }
      else if (userFiltered.length > 0) {
        set_is_checked(userFiltered.map((record) => record.id))
      }
    } else if (checked_or_not === false) {
      set_is_checked([])

    }

  }

  function handleCheckBox(event) {
    const { value, checked } = event.target;
    if (checked) {

      set_is_checked([...isChecked, value])

    }
    else {
      set_is_checked(isChecked.filter((entry) => entry !== value))

    }
  }

  function deleteSelectedRecords(event) {
    event.preventDefault();
if(isChecked.length==0)return;
    let newUserList = [...userList];
   newUserList=newUserList.filter((record)=>((isChecked).includes(record.id))==false)
   updateUserList(newUserList)
   filteredUsers =
    newUserList.filter((entry) => {
      if (query === "")
        return entry;


      if (entry.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
        return entry;

      if (entry.email.toLowerCase().indexOf(query.toLowerCase()) > -1)
        return entry;

      if (entry.role.toLowerCase().indexOf(query.toLowerCase()) > -1)
        return entry;
    })
   updateuserFiltered(filteredUsers.slice((currentpageNumber - 1) * (users_per_page), ((currentpageNumber - 1) * (users_per_page) + users_per_page)));
   //updatePageNumber(1);
   set_is_checked([])
  
    }
    
  return (
    <div>
      <form >
        <table border={"1px solid brown"} style={{
          width: "100%",
          backgroundColor: "#FFE4E1", border: "solid", borderColor: "goldenrod"
        }}>
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th><p><input type="checkbox" style={{ width: "25px", height: "25px" }} checked={isChecked.length===0?false:null} onChange={(event) => selectAllCheckbox(event.target.checked,event)} /></p></th>
              <th style={{ fontSize: "30px" }}>Name</th>
              <th style={{ fontSize: "30px" }}>Email</th>
              <th style={{ fontSize: "30px" }}>Role</th>
              <th style={{ fontSize: "30px" }}>Actions</th>
            </tr>
          </thead>

          <tbody >
            {
              query_tracker === "NO_query_update" ? userFiltered.map((record,index) =>
                <Fragment>{edited_record_id == record.id ? <EditableRow key={record.id} record={record} edit_row_data={edit_row_data} rowEditChange={rowEditChange} rowEditSave={rowEditSave}rowEditCancel={rowEditCancel}/> : <ReadOnlyRow key={record.id} rowEditClick={rowEditClick} record={record} rowDelete={rowDelete} handleCheckBox={handleCheckBox} deleteSelectedRecords={deleteSelectedRecords} isChecked={isChecked} />}</Fragment>

              ) : initial_page_filter.map((record,index) =>
                <Fragment>{edited_record_id == record.id ? <EditableRow key={record.id} record={record} edit_row_data={edit_row_data} rowEditChange={rowEditChange} rowEditSave={rowEditSave} rowEditCancel={rowEditCancel} /> : <ReadOnlyRow key={record.id} rowEditClick={rowEditClick} record={record} rowDelete={rowDelete} handleCheckBox={handleCheckBox} deleteSelectedRecords={deleteSelectedRecords} isChecked={isChecked} />}</Fragment>
              )

            }
          </tbody>
        </table>
      </form>
      <Footer currentpage={currentpageNumber} updatefilterCount={updatefilterCount} userCount={filteredUsers.length} deleteSelectedRecords={deleteSelectedRecords} />
    </div>

  )

}
export default ListTable;
