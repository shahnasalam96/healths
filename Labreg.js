import  React,{Component} from 'react';
import './Labreg.css';

 class Labreg extends Component{
     render()
     {
         return(
             <div className='lab'>
                <h1><i>MEDCHAIN</i></h1>
                <h2><i><u>SAVING LIVES </u></i></h2><br></br><br></br>
                <h3>LAB REGISTRATION</h3>
                <h4>Please fill in the form below</h4>

                <center>
                <label htmlFor="lname"><b>Name of the Laboratory :</b></label>
                <input type="text" id="lname" name="labname" placeholder="Your laboratory name.."/><br></br>

                <label htmlFor="ladd"><b>Address :</b></label>
                <input type="text" id="ladd" name="laddress" placeholder="Your  address.."/><br></br>

                <label htmlFor="lcty"><b>District :</b></label>
                <input type="text" id=" lcty" name="lcity " placeholder="Your  district.."/><br></br>

                <label htmlFor="lcnt"><b>State :</b></label>
                <input type="text" id="lcnt" name=" lcountry" placeholder="Your state .."/><br></br>

                <label htmlFor="lpnc"><b>PIN Code :</b></label>
                <input type="number" id="lpnc" name="lpin" placeholder="Your PIN Code.."/><br></br>

                <label htmlFor="leml"><b>Email Id :</b></label>
                <input type="email" id="leml" name="lemail " placeholder="Your email.."/><br></br>

                <label htmlFor="luname"><b>User Name :</b></label>
                <input type="text" id="luname" name="lusername" placeholder="Your user name.."/><br></br>

                <label htmlFor="lpass"><b>Password     :</b></label>
                <input type="text" id="lpass" name="lpassword" placeholder="Your password.."/><br></br>

                <label htmlFor="rpass"><b>Re-Enter Password     :</b></label>
                <input type="text" id="rpass" name="rpassword" placeholder="Your password.."/><br></br>

                <input type="Submit" value="Register"/>
                <input type="submit" value="cancel"/>
                </center>

             </div>
         );
     }
 }
 export default Labreg;