import React, {Component} from 'react';
import './Dnotice.css';

class Dnotice extends Component{
    render()
    {
        return(
            <div className="dnot">
            <center>
                <table border="1" width="1000">
                <caption>NOTICE BOARD</caption>
                <tr><th> DATE</th>
                    <th>HOSPITAL NAME</th>
                    <th>IN</th>
                    <th>OUT</th>
                </tr>
                    <tr><td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                    
                </table>
            </center>
            </div>
        );
    }
}
export default Dnotice;