import React,{Component} from "react";
import './Hdept.css';

class Hdept extends Component{
    render(){
        return(
            <div className="hdpt">
            <table border="1">
                <tr>
                     <th>SL NO</th>
                    <th>DEPARTMENT ID</th>
                    <th>DEPARTMENT NAME</th>
                </tr>
            </table>
            <div className="abody">
                    <label htmlFor="did"><b>Department Id :</b></label>
                    <input type="text" id="did" name="deptid" placeholder="Department Id.."/><br></br>
                    <label htmlFor="dn"><b>Department Name    :</b></label>
                    <input type="text" id="dn" name="dept" placeholder="Department.."/><br></br>
                    <input type="submit" value="Cancel"/>
                    <input type="submit" value="Submit"/>
                </div>

            </div>
        );
    }
}
export default Hdept;