"use client";
import React, { useState } from "react"; // Added useState
import ModulesControls from "./modules/modulesControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./modules/LessonControlButtons";

export default function Courses() {
  const [moduleName, setModuleName] = useState("");

  const addModule = () => {
    console.log("Adding module:", moduleName);
    setModuleName(""); 
  };

  return (
    <div id="wd-courses">
      <ModulesControls 
        moduleName={moduleName} 
        setModuleName={setModuleName} 
        addModule={addModule} 
      />
      
      <br /><br /><br />
      
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" /> 
            <span className="flex-grow-1">Week 1</span>
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" /> 
              <span className="flex-grow-1">LEARNING OBJECTIVES</span>
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}