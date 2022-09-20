import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techList = technologies.map((tech)=> {
    //console.log(tech)
   return (<span key={tech}>{tech}</span>);
});

console.log(techList)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <p>
            {techList}
          </p>
      </div>
    </div>
  );
}

export default ProjectItem;
