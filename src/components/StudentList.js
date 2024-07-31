import { useState } from "react";

export default function StudentList() {
  const [show, setShow] = useState(true);
  const [student, setStudent] = useState([
    { id: 1, name: "game" },
    { id: 2, name: "jo" },
    { id: 3, name: "nam" },
    { id: 4, name: "oat" },
  ]);
  function deleteStudent(id) {
    console.log(id);
  }
  function deleteStudent(id) {
    setStudent(student.filter((student) => student.id !== id));
  }
  return (
    <>
      <p>จำนวน = {student.length}</p>
      <button onClick={() => setShow(!show)}>switch</button>
      <ul>
        {show &&
          student.map((student) => (
            <li key={student.id}>
              {" "}
              id {student.id} name {student.name}{" "}
              <button onClick={() => deleteStudent(student.id)}>delete</button>
            </li>
          ))}
      </ul>
    </>
  );
}
