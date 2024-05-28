import { Github, Link } from "lucide-react"
import './MainCard.css'

export default function MainCard({ index, project, lengthUnit }) {
    return (
        <div className="mainCard item"
            key={index}
            style={{
                width: `${lengthUnit}%`
            }}
        >
            <div className="mainCardContainer">
                <div className='imageContainer' >
                    <a href={project.links[1]} target="_blank">
                        <img src={project.gif ? project.gif : '/petsgram.gif'}
                            style={{ width: '100%' }} />
                    </a>
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
                <div className="tags">
                    {project.tags.map((tag) => <div className="tag">{tag}</div>)}
                </div>
            </div>
        </div>
    )
}