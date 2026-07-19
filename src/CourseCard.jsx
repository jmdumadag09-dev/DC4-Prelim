function CourseCard() {
  const course = "Domain Course 4";
  const schedule = "MWF 8:00 AM React Fundamentals with Laravel";
  return (
    <div>
      <h1>{course}</h1>
      <p>{schedule}</p>
    </div>
  );
}

export default CourseCard;
