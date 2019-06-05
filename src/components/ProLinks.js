import React from 'react';

const ProLinks = () => {
 return (
   <section id="prolinks" className="grid">
     <div className="content-wrap">
       <h1 className="content-title">Professional Links</h1><br />
       <table>
         <tbody>
          <tr>
            <th>
                <i className="fab fa-linkedin fa-5x"></i>
            </th>
            <th>
                <i className="fab fa-github fa-5x"></i>
            </th>
          </tr>
          <tr>
              <td><a href="https://www.linkedin.com/in/dwyanalford" target="_blank" rel="noopener noreferrer">
                <p>Dwyan's<br />LinkedIn Page</p></a></td>

              <td><a href="https://github.com/dwyanalford" target="_blank" rel="noopener noreferrer">
                <p>Dwyan's<br />Github Repository</p></a></td>

          </tr>
          </tbody>
       </table>
     </div>
   </section>
 )
}

export default ProLinks;
