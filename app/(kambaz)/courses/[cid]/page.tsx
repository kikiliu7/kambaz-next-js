import LessonControlButtons from "./modules/LessonControlButtons";
import ModulesControls from "./modules/modulesControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";

export default function Courses() {
  return (
    <div id="wd-courses">

  <ModulesControls /><br /><br /><br />
  <ListGroup className="rounded-0" id="wd-modules">
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" /> Week 1 <ModulesControls />
      </div>
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
        </ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
        </ListGroupItem>
        ...
      </ListGroup>
    </ListGroupItem>
  </ListGroup>

    </div>

    
);}
