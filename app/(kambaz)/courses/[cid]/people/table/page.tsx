import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Tony</span>{" "}
          <span className="wd-last-name">Stark</span></td>
      <td className="wd-login-id">001234561S</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-10-01</td>
      <td className="wd-total-activity">10:21:32</td></tr>

<tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Bryce</span>{" "}
          <span className="wd-last-name">Wayne</span></td>
      <td className="wd-login-id">001234561B</td>
      <td className="wd-section">B101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-20-02</td>
      <td className="wd-total-activity">01:00:00</td></tr>

<tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Steve</span>{" "}
          <span className="wd-last-name">Rogers</span></td>
      <td className="wd-login-id">001234561R</td>
      <td className="wd-section">R101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2019-20-02</td>
      <td className="wd-total-activity">30:19:39</td></tr>

<tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Ryan</span>{" "}
          <span className="wd-last-name">Houlahan</span></td>
      <td className="wd-login-id">001234567R</td>
      <td className="wd-section">R102</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2026-4-02</td>
      <td className="wd-total-activity">67:10:67</td></tr>
    </tbody>
   </Table>
  </div> );}