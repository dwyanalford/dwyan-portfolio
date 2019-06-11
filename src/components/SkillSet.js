import React from 'react';

const SkillSet = () => {
 return (
   <section id="skills" className="col">
     <div className="content-wrap">
       <h1 className="content-title">Full Stack Javascript Developer</h1>
       <h3>Web Technologies I use to write my code:</h3>
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
           <td>Visual Studio Code</td>
         </tr>
         <tr>
           <td>CSS</td>
           <td>Adobe Photoshop (Image Editing / Optimizing)</td>
           <td>Full Javascript Server Side: Node.js & Express.js</td>
         </tr>
         <tr>
           <td>HTML</td>
           <td></td>
           <td>Mongo DB / Mongoose</td>
         </tr>
         </tbody>
       </table>
     </div>
   </section>
 )
}


export default SkillSet;
