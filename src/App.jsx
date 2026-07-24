//Jian Macr Dumadag 
//schedule: 5:00 - 6:00
//Section 1
import Header from "./Header";
import StudentCard from "./StudentCard";
import AttendanceCounter from "./AttendanceCounter"


function App() {
  return(
  <div>
    <Header/>
    <StudentCard
    name ="Jian Dumadag"
    age ="20"
    course = "BSIT"
    isRegular ="true"/>

    <StudentCard
    name= "Keir"
     age ="20"
    course = "BSIT"
    isRegular ="true"
    />

    <StudentCard
     name = "Aljon"
     age ="20"
    course = "BSIT"
    isRegular ="fasle"/>

    <AttendanceCounter/>
  </div>
  );
}


export default App;
