import React from 'react';

const SkillSet = () => {
 return (
   <section id="skills" className="grid">
     <div className="content-wrap">
       <h1 className="content-title">Full Stack Javascript Developer</h1>
       <h3>Technologies Skill Set:</h3>
       <table id="skillsTable">
       <tbody>
         <tr>
           <th className="theme">Languages</th>
           <th className="theme">Front End</th>
           <th className="theme">Back End</th>
         </tr>
         <tr>
           <td>HTML</td>
           <td>React</td>
           <td>Node</td>
         </tr>
         <tr>
           <td>CSS</td>
           <td>React Native</td>
           <td>Express</td>
         </tr>
         <tr>
           <td>Javascript</td>
           <td>Redux</td>
           <td>Mongo/Mongoose</td>
         </tr>
         <tr>
           <td>JQuery</td>
           <td>Adobe Photoshop</td>
           <td>GraphQL/Apollo</td>
         </tr>
         </tbody>
       </table>
     </div>
   </section>
 )
}


export default SkillSet;
