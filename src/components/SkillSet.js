import React from 'react';

const SkillSet = () => {
 return (
     <div className="content-wrap">
       <h1 className="content-title">Full Stack Web Developer</h1>
       <h3>Web Technologies Skill Set:</h3>
       <table id="skillsTable">
       <tbody>
         <tr>
           <th className="theme">Web Languages</th>
           <th className="theme">Client</th>
           <th className="theme">Server</th>
         </tr>
         <tr>
           <td>Javascript</td>
           <td>React.js</td>
           <td>Node.js</td>
         </tr>
         <tr>
           <td>CSS</td>
           <td>Adobe Photoshop (Image Editing / Optimizing)</td>
           <td>Express.js</td>
         </tr>
         <tr>
           <td>HTML</td>
           <td>Adobe Creative Cloud</td>
           <td>Mongo DB</td>
         </tr>
         </tbody>
       </table>
     </div>
 )
}


export default SkillSet;
