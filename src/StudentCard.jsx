function StudentCard(props){
    return(
        <div>
        <p>Student:{props.name}</p>
        <p>Student age:{props.age}</p>
        <p>Course: {props.course}</p>
        <p>Status: {props.isRegular ? "Regular Student":"Irregular Student"}</p>
        </div>
    );
}
export default StudentCard;