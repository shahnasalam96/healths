import React, {Component} from 'react';
import './Hedit.css';

class Hedit extends Component{
    render()
    {
      return(
        <div className="hedit">
          <center>
          <h2>Please fill in the form below</h2>
          <div className="hp">
               
                

                <center>
                <label htmlFor="img"><b>Upload your image :</b></label>
                <input type="file" id="pic" name="img" /><br></br>

                <label htmlFor="lname"><b>Name of the Hospital :</b></label>
                <input type="text" id="lname" name="labname" placeholder="Your hospital name.."/><br></br>

                <label htmlFor="ladd"><b>Address :</b></label>
                <input type="text" id="ladd" name="laddress" placeholder="Your  address.."/><br></br>

                <label htmlFor="lcty"><b>District :</b></label>
                <input type="text" id=" lcty" name="lcity " placeholder="Your  district.."/><br></br>

                <label htmlFor="lcnt"><b>State :</b></label>
                <input type="text" id="lcnt" name=" lcountry" placeholder="Your state .."/><br></br>

                <label htmlFor="lpnc"><b>PIN Code :</b></label>
                <input type="number" id="lpnc" name="lpin" placeholder="Your PIN Code.."/><br></br>

                <label htmlFor="cn"><b>Contact number :</b></label>
                <input type="number" id="leml" name="cn " placeholder="Your Number.."/><br></br>


                <label htmlFor="leml"><b>Email Id :</b></label>
                <input type="email" id="leml" name="lemail " placeholder="Your email.."/><br></br>

                <label htmlFor="luname"><b>User Name :</b></label>
                <input type="text" id="luname" name="lusername" placeholder="Your user name.."/><br></br>

                <label htmlFor="lpass"><b>Password     :</b></label>
                <input type="password" id="lpass" name="lpassword" placeholder="Your password.."/><br></br>


                <input type="Submit" value="Submit"/>
                <input type="submit" value="cancel"/>
                </center>

            </div>
            </center>
            </div>
            
        );
    }
}
export default Hedit;