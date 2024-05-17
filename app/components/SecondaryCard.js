import { Github, Link } from "lucide-react"

export default function SecondaryCard({ index, project }) {
    return (
        <div
            key={index}
            className="not-focused item">
            <div className='image-container' >
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
    )
}