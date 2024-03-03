import "./App.css";
import { useState } from "react";
import Form from "./Form";
import Popup from "./Popup";

function Page2() {
  const Student = {
    id: "",
    name: "",
  };
  const [students, setStudents] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function addStudent() {
    const newStudent = { ...Student, id: generateUniqueId() };
    setStudents([...students, newStudent]);
  }
  function removeStudent(studentID) {
    setStudents(students.filter((student) => student.id !== studentID));
  }
  // since i didn't have acess to id yet i made a random id generator
  function generateUniqueId() {
    return crypto.randomUUID();
  }
  return (

    <div className="container">
      <section className="main-content">
        <header className="header">
          {students.length} people are on the grind!
        </header>
        <article className="list">
          {students.map((student) => (
            <div key={student.id} id="item">
              <button
                onClick={() =>{ setIsPopupOpen(true); removeStudent(student.id);}}
                id="removeButton"
              >
                {" "}
                -{" "}
              </button>
              <div id="name">
                <div className="text">Manish</div>
              </div>
            </div>
          ))}
          <button onClick={addStudent} id="addButton">
            Enter
          </button>
        </article>
      </section>
      <aside className="feedback">{<Form/>}</aside>
      <Popup isOpen={isPopupOpen} onClose={()=>setIsPopupOpen(false)}/>
    </div>
    
  );
}


export default Page2;