import React,{Component} from "react";
import './Hdrlist.css';

class Hdrlist extends Component{
    render(){
        return(
            <div className="hdl">
            <table border="1">
                <tr>
                     <th>SL NO</th>
                    <th>Doctors' id ID</th>
                    <th> Name of Doctor</th>
                    <th>Department</th>
                   
                </tr>
            </table>
            <div className="dr">
            <label htmlFor="drid"><b>Doctor Id :</b></label>
                    <input type="text" id="drid" name="docid" placeholder="Doctor Id.."/><br></br>
                    <label htmlFor="dn1"><b>Docotrs' Name    :</b></label>
                    <input type="text" id="dn1" name="dname" placeholder="Doctors' name.."/><br></br>
                    <input type="submit" value="Cancel"/>
                    <input type="submit" value="Submit"/>
            </div>
 
            </div>
        );
    }
}
export default Hdrlist;