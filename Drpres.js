import React,{Component} from 'react';
import './Drpres.css';

class Drpres extends Component{
    render(){
        return(
           
           <div className="dp">

                    <h1>MEDCHAIN</h1>
                    <h2><u><i>SAVING LIVES</i></u></h2><br></br>

                <div class="card1">
                    <img src= {require("./images/dora.jpg")} width="100px" height="100px"/>
                        <p>Name:</p>
                        <p>Age:</p>
                        <p>Gender:</p>
                        <p>Marital Status:</p>
                        <p>DOB:</p>
                        <p>Address</p>
                        <p>Mobile Number:</p>
                        <p>Emergency Contact Number:</p>
                        <p>Allergies:</p>
                
                </div>

                    <b>Appointment on&nbsp;</b><input type="date"/><br></br><br></br>
                    <b>Dr</b><br></br><input type="text"/><br></br>
                    <b> Desease</b><br></br>
                    <textarea rows='15' cols='80'/><br></br><br></br>

                    <div></div>  <b>Test</b> <br></br><br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" value="uric acid" name="uric acid"/>Uric Acid 
                    <input type="checkbox" value="diabetes" name="diabetes"/>Diabetes

                <div><b>Prefer Lab</b><br></br><select name="lab">
                    <option>--</option>
                    <option>Devi </option>
                    <option>National</option>
                    </select>
                    <input className='btn' type="submit" value="Send Request"></input>
                </div>
                

                    <br></br><a href="#"><b>Result</b></a><br></br><br></br>

                    <b>Medicines</b>
                            <table border='2' >
                                <tr><th>Medicine</th>
                                    <th>Dosage</th></tr>
                                <tr><td ><input type="text"></input> </td>
                                    <td><input type="text"></input></td></tr>
                                <tr><td><input type="text"></input></td>
                                    <td><input type="text"></input></td></tr>
                            </table><br></br>
                
                    <b>Review Date<input type="date"/></b><br></br>


                <div className="sub"><input type="submit" value="Finalize"/> &nbsp;&nbsp;
                      <input type="submit" value="Save"/>
               
                </div>

            </div>

        );
    }
}
export default Drpres;