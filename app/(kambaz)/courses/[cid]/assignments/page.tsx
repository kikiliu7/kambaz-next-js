"use client";
import { RootState } from "../../../store";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaTrash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";

  const handleDelete = (aid: string) => {
    if (window.confirm("Are you sure you want to remove this assignment?")) {
      dispatch(deleteAssignment(aid));
    }
  };

  return (
    <div id="wd-assignments">
      {isFaculty && (
        <Link href={`/Kambaz/Courses/${cid}/Assignments/new`} className="btn btn-danger float-end">
          + Assignment
        </Link>
      )}
      {/* ... filter assignments by course ID and map ... */}
      {assignments
        .filter((a) => a.course === cid)
        .map((a) => (
          <div key={a._id} className="d-flex align-items-center border-start border-success border-4 mb-2 p-3">
             <Link href={`/Kambaz/Courses/${cid}/Assignments/${a._id}`} className="flex-grow-1 text-dark text-decoration-none">
                <b>{a.title}</b>
             </Link>
             {isFaculty && (
               <button onClick={() => handleDelete(a._id)} className="btn text-danger">
                 <FaTrash />
               </button>
             )}
          </div>
        ))}
    </div>
  );
}