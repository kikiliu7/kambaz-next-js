"use client";
import { RootState } from "../../../../store";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  
  
  const { assignments } = useSelector((state: RootState) => state.assignmentReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";

  
  const existing = assignments.find((a) => a._id === aid);
  
  const [assignment, setAssignment] = useState(existing || {
    title: "New Assignment",
    description: "Description",
    pts: 100,
    due: "2024-05-13",
    availableFrom: "2024-05-06",
    availableUntil: "2024-05-20",
    course: cid
  });

  const handleSave = () => {
    if (aid === "new") {
      dispatch(addAssignment({ ...assignment, _id: new Date().getTime().toString() }));
    } else {
      dispatch(updateAssignment(assignment));
    }
    router.push(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div className="p-4">
      <input 
        className="form-control mb-3"
        value={assignment.title} 
        readOnly={!isFaculty}
        onChange={(e) => setAssignment({...assignment, title: e.target.value})}
      />
      <textarea 
        className="form-control mb-3"
        value={assignment.course}
        readOnly={!isFaculty}
        onChange={(e) => setAssignment({...assignment, course: e.target.value})}
      />
      {/* Add similar inputs for pts, due, availableFrom, and availableUntil */}
      
      <hr />
      <div className="float-end">
        <button onClick={() => router.push(`/Kambaz/Courses/${cid}/Assignments`)} className="btn btn-secondary me-2">
          Cancel
        </button>
        {isFaculty && (
          <button onClick={handleSave} className="btn btn-danger">
            Save
          </button>
        )}
      </div>
    </div>
  );
}