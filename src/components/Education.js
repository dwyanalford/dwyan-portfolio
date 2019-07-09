import React from 'react';

import Gwu from '../images/gwu_logo.jpg';
import Nyu from '../images/nyu_logo.jpg';

const Education = () => {
 return (
     <div className="content-wrap">
       <h1 className="content-title">Formal Education</h1>
      <table>
        <tbody>
          <tr>
            <td><img src={ Gwu } alt="George Washington University Logo"/></td>
            <td><p><b>George Washington University (2017)</b><br />Certification: Full Stack Web Developer</p>
            <button href="https://bootcamp.cps.gwu.edu/"
              target="_blank" rel="noopener noreferrer" className="button">Course Details</button>
            </td>
          </tr>
          <tr>
            <td><img src={ Nyu } alt="New York University Logo"/></td>
            <td><p><b>New York University (1992-96)</b><br />Bachelor's - Accounting & Marketing</p></td>
          </tr>
        </tbody>
      </table>
     </div>
 )
}

export default Education
