import React, {Component} from 'react';
import './Dredit.css';

class Dredit extends Component{
    render()
    {
      return(
        <div className="dedit">
          <center>
          <h2>Please fill in the form below</h2>
          <div className="dpro">

                <center>
                <label htmlFor="img2"><b>Upload your image :</b></label>
                <input type="file" id="pic" name="img" /><br></br>

                <label htmlFor="name2"><b>Name  :</b></label>
                <input type="text" id="yname2" name="name2" placeholder="Your  name.."/><br></br>
               
                <label htmlFor="dob2"><b>DOB  :</b></label>
                <input type="date" id="dob2" name="dob2" /><br></br>

                <label htmlFor="gd2"><b>Gender  :</b></label>
                <input type="date" id="gen2" name="gd2" /><br></br>
               
                <label htmlFor="ht2"><b>Department  :</b></label>
                <input type="date" id="gen2" name="ht2" /><br></br>

                <label htmlFor="ladd2"><b>Address :</b></label>
                <input type="text" id="ladd2" name="laddress2" placeholder="Your  address.."/><br></br>

                <label htmlFor="lcty2"><b>District :</b></label>
                <input type="text" id=" lcty2" name="lcity2 " placeholder="Your  district.."/><br></br>

                <label htmlFor="lcnt2"><b>State :</b></label>
                <input type="text" id="lcnt2" name=" lcountry2" placeholder="Your state .."/><br></br>

                <label htmlFor="lpnc2"><b>PIN Code :</b></label>
                <input type="number" id="lpnc2" name="lpin2" placeholder="Your PIN Code.."/><br></br>

                <label htmlFor="cn2"><b>Contact number :</b></label>
                <input type="number" id="cnm2" name="cn2 " placeholder="Your Number.."/><br></br>


                <label htmlFor="leml"><b>Email Id :</b></label>
                <input type="email2" id="leml2" name="lemail2" placeholder="Your email.."/><br></br>

                <label htmlFor="luname2"><b>User Name :</b></label>
                <input type="text" id="luname2" name="lusername2" placeholder="Your user name.."/><br></br>

                <label htmlFor="lpass2"><b>Password     :</b></label>
                <input type="password" id="lpass2" name="lpassword2" placeholder="Your password.."/><br></br>

                <input type="Submit" value="Submit"/>
                <input type="submit" value="cancel"/>
                </center>

            </div>
            </center>
            </div>
            
        );
    }
}
export default Dredit;