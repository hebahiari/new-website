import { Github, Link } from "lucide-react"
import './MainCard.css'

export default function SecondaryCard({ index, project, lengthUnit }) {
    if (!project) {
        return <></>
    }

    return (
        <div
            key={index}
            className="secondaryCard item"
            style={{ width: `${lengthUnit}%` }}>
            <div className='image-container' >
                <img src={project.image}
                    style={{ width: '100%' }} />
                <div className="links" >
                    <a href={project.links[0]} target="_blank" >
                        <Github className="icon" />
                    </a>
                    < a href={project.links[1]} target="_blank" >
                        <Link className="icon" />
                    </a>
                </div>
            </div>
            < p className="w-full" >
                {project.name}
            </p>
            <p>
                {project.type}
            </p>
        </div>
    )
}