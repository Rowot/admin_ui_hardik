import React from "react";
import {FaSave} from "react-icons/fa";
import {ImCross} from "react-icons/im";

export default function EditableRow({edit_row_data,rowEditChange,rowEditSave,rowEditCancel,record}){
    
    return(
        <tr key={`Edit${record.id}`} >
        <td key={`Edit Col1`}><p>Editing in Progress</p></td>
            <td key={`Edit Col2`}><input autoFocus style={{textAlign: "center",backgroundColor : "#FFE4E1" ,fontSize:"16px",
            height:"50px",
            width:"95%"}}
                    type="text"
                    required="required"
                    placeholder="Enter a Name..."
                    name="name"
                    value={edit_row_data.name}
                    onChange={rowEditChange}/>
                </td>
            <td key={`Edit Col3`}><input style={{textAlign: "center",backgroundColor : "#FFE4E1" ,
            height:"50px",
            width:"95%"}}
                    type="email"
                    required="required"
                    placeholder="Enter an Email..."
                    name="email"
                    value={edit_row_data.email}
                    onChange={rowEditChange}/>
                </td>
            <td key={`Edit Col4`}><input style={{textAlign: "center",backgroundColor : "#FFE4E1" ,
            height:"50px",
            width:"95%"}}
                    type="text"
                    required="required"
                    placeholder="Enter a Role..."
                    name="role"
                    value={edit_row_data.role}
                    onChange={rowEditChange}/>
                </td>
                <td key={`Edit Col5`}><button style={{fontSize:"26px",
       backgroundColor:"#FFE4E1",
       border:"none",
       color:"#191970"
       }} onClick={(event)=>rowEditSave(event)}><FaSave/></button>
       
      
<button style={{fontSize:"24px",backgroundColor:"#FFE4E1",border:"none",color:"#E50914"}} onClick={(e)=>rowEditCancel(e)}><ImCross/></button></td>
        </tr>
    )
}