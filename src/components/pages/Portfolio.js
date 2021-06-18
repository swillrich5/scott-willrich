import React, { Fragment, useState, useEffect } from 'react'
import imageLoader from "../../apps";

const Portfolio = () => {

    const [projects, setProjects ] = useState([]);

    useEffect(() => {
        const apps = imageLoader();
        setProjects(apps);
      }, []);

    //   console.log(projects);

    return (

        <Fragment>
            <div>
                <h1 className="text-center mb-5">My Work</h1>
            </div>
            <div className="row mx-auto justify-content-around">
                {projects.map(project => (
                    <div key={project.id} className="card col-sm-12 col-md-3" >
                        <img className="card-img-top" alt={project.name} src={project.image} />
                        <div className="card-body">
                            <h4 className="card-title">{project.name}</h4>
                            <p className="card-text">{project.description}</p>
                            <a href={project.repo} className="btn btn-primary mr-3">Github</a>
                            <a href={project.deployed} target="_blank" className="btn btn-primary">{project.name}</a>
                        </div>
                    </div>
                ))}
            </div>

        </Fragment>
    )
}

export default Portfolio;

