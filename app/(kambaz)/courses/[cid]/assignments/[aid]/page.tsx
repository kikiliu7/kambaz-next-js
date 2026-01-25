export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" defaultValue=" The assignment is available online Submit a link to the landing page of">
      </textarea>
      <br />
            <br />
      <table>
        <tbody>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} /> 
          </td>
        </tr>
        </tbody>
<br/>
<tbody>

<tr>
        <td align="right" valign="top">
            <label htmlFor="assn-group">Assignment Group: </label>
          </td>
<td>
        <select>
   <option value="Percentage"selected>Percentage</option>
</select>
</td>
</tr>
</tbody>

<tbody>
<br/>
<tr>
<td align="right" valign="top">
            <label htmlFor="sub-type">Submission Type: </label>
</td>
<td align="left" valign="top">
        <select>
   <option value="Online"selected>Online</option>
</select>
</td>
</tr>
</tbody>

<tbody>
<tr> 
<br/>
<td align="left" valign="top">
<label htmlFor="online-check">Online Entry Options</label><br/>

<input type="checkbox" name="online-check" id="check-txtentry"/>
<label htmlFor="check-txtentry">Text Entry</label><br/>

<input type="checkbox" name="online-check" id="check-website"/>
<label htmlFor="check-website">Wesbite URL</label><br/>

<input type="checkbox" name="online-check" id="check-media"/>
<label htmlFor="check-media">Media Recordings</label><br/>

<input type="checkbox" name="online-check" id="check-student"/>
<label htmlFor="check-student">Student Annotation</label> <br/>

<input type="checkbox" name="online-check" id="check-file"/>
<label htmlFor="check-file">File Uploads</label>

</td>
</tr>
</tbody>
<br/>

<tbody>
<tr>

<td align="right" valign="top">
            <label htmlFor="assn-to">Assign </label>
          </td>

    <tr>
          <td align="left" valign="top">
            <label htmlFor="assn-to">Assign to</label>
          </td>
          <br/>
          </tr>
    <tr>
    <td align="left" valign="top"> 
    <input id="assn-to" defaultValue="Everyone" /></td> <br/>
</tr>

<br/>

<tr>
<td align="left" valign="top"> 
<label htmlFor="due">Due</label>
</td>
</tr>
<input type="date"
       defaultValue="2024-05-13"
       id="due"/><br/>

<br/>
<tr> 
<tr>
<td align="left" valign="top"> 
<label htmlFor="avail-date">Available From</label>
</td>
</tr>

<input type="date"
       defaultValue="2024-05-06"
       id="avail-date"/><br/>

<td> </td>

<tr>
<td align="left" valign="top"> 
<label htmlFor="avail-date">Until</label>
</td>
</tr>

<input type="date"
       defaultValue="2024-05-20"
       id="avail-date"/><br/>

</tr>

<br/>
</tr>
</tbody>

 </table>

<hr/>

<table id="button-container">
<td valign="top" width={6000}> 
    
</td>
<td align="left" valign="top">
  <button>Cancel</button>
  </td>
  <td align="left" valign="top">
  <button>Save</button>
  </td>
</table>



    </div>
);}
