// type SkillProps = {
//     skills : string[]
// }
import React, { useEffect, useState } from "react";

const skills = ({ skills }) => {

  const [isLoggedIn, setIsLoggedIn ] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 500)
  }, [])
  return (
    <div>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </div>
  );
};

export default skills;
