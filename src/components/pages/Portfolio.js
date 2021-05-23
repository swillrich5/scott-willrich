import React, { Fragment, useState, useEffect } from 'react'
import imageLoader from "../../apps";

const Portfolio = () => {

    const [projects, setProjects ] = useState([]);

    useEffect(() => {
        const apps = imageLoader();
        setProjects(apps);
      }, []);

      console.log(projects);

    return (
        <Fragment>
            {projects.map(project => (
                <div className="card">
                    <div className="img-container">
                        <img alt={project.name} src={project.image} />
                    </div>
                    <div className="content">
                        <ul key={project.id}>
                            <li>
                                <strong>Name:</strong> {project.name}
                            </li>
                            <li>
                                <strong>Description:</strong> {project.description}
                            </li>
                            <li>
                                <strong>GitHub Repo:</strong> {project.repo}
                            </li>
                            <li>
                                <strong>Deployed App:</strong> {project.deployed}
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}

export default Portfolio;