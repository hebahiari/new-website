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