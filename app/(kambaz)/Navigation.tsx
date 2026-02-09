import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { MdViewModule, MdAssignment, MdOutlineQuiz, MdGrade, MdPeople } from "react-icons/md";
import { BiLogoZoom } from "react-icons/bi";





export default function CourseNavigation() {
  return (
    <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 120 }}
              id="wd-kambaz-navigation">
     <ListGroupItem className="bg-black border-0 text-center" as="a"
              target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
       <img src="/NEU.png" width="75px" alt="Northeastern University" />
     </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/account" id="wd-account-link" className="text-white text-decoration-none">
         <FaRegCircleUser className="fs-1 text-white" />
         <br />
         Account
       </Link>
     </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
         <AiOutlineDashboard className="fs-1 text-danger" />
         <br />
         Dashboard
       </Link>
     </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/courses/1234/home" id="wd-home-link" className="text-danger text-decoration-none">
         <FaHome className="fs-1 text-danger" />
         <br />
         Home
       </Link>
     </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/courses/1234/modules" id="wd-modules-link" className="text-danger text-decoration-none">
         <MdViewModule className="fs-1 text-danger" />
         <br />
         Modules
       </Link>
     </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/courses/1234/zoom" id="wd-zoom-link" className="text-danger text-decoration-none">
         <BiLogoZoom className="fs-1 text-danger" />
         <br />
         Zoom
       </Link>
     </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/courses/1234/assignments" id="wd-assignments-link" className="text-danger text-decoration-none">
         <MdAssignment className="fs-1 text-danger" />
         <br />
         Assignments
       </Link>
     </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/courses/1234/quizzes" id="wd-quizzes-link" className="text-danger text-decoration-none">
         <MdOutlineQuiz className="fs-1 text-danger" />
         <br />
         Quizzes
       </Link>
     </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/courses/1234/grades" id="wd-grades-link" className="text-danger text-decoration-none">
         <MdGrade className="fs-1 text-danger" />
         <br />
         Grades
       </Link>
     </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/courses/1234/people/table" id="wd-people-link" className="text-danger text-decoration-none">
         <MdPeople className="fs-1 text-danger" />
         <br />
         People
       </Link>
     </ListGroupItem>
     </ListGroup>

    
  );}


