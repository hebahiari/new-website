import { Github, Link } from "lucide-react"
import './MainCard.css'

export default function MainCard({ index, project }) {
    return (
        <div className="mainCard item"
            key={index}
        >
            <div className="mainCardContainer">
                <div className='imageContainer' >
                    <img src='/petsgram.gif'
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
        </div>
    )
}