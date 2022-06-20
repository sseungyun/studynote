import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Professor from "./pages/Professor";
import Department from "./pages/Department";
import Student from "./pages/Student";

const App = () => {
  return (
    <div>
      <li>Exam03</li>
      <nav>
        <Link to="/department">학과목록</Link>|&nbsp;
        <Link to="/professor">교수목록</Link>|&nbsp;
        <Link to="/student">학생목록</Link>
      </nav>

      <Routes>
        <Route path="/department" element={<Department/>} />
        <Route path="/professor" element={<Professor/>} />
        <Route path="/student" element={<Student/>} />
      
      </Routes>
    </div>  
  );
}

export default App;
