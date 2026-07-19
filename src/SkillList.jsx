function Skills() {
  const skills = [
    "Video editing",
    "Graphic design",
    "Photography",
    "Photo editing",
    "Videography",
  ];

  return (
    <div>
      <h2>My Skills</h2>

      <ul>
        <li>{skills[0]}</li>
        <li>{skills[1]}</li>
        <li>{skills[2]}</li>
        <li>{skills[3]}</li>
        <li>{skills[4]}</li>
      </ul>
    </div>
  );
}

export default Skills;
