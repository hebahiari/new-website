import React, { useRef, useEffect } from 'react';
import { Github, Link } from "lucide-react";
import './MainCard.css';

export default function MainCard({ index, project, lengthUnit }) {
    const cardRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { width, height, left, top } = cardRef.current.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;
            const moveX = ((x / width) - 0.5) * 30; // 30 is the max tilt angle
            const moveY = ((y / height) - 0.5) * 30;

            cardRef.current.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
            console.log(`Mouse Move: rotateX(${moveY}deg) rotateY(${moveX}deg)`);
        };

        const handleMouseLeave = () => {
            cardRef.current.style.transform = 'rotateX(0) rotateY(0)';
            console.log('Mouse Leave: Reset transform');
        };

        const card = cardRef.current;
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="mainCard item"
            key={index}
            style={{ width: `${lengthUnit}%` }}
        >
            <div className="mainCardContainer">
                <div className='imageContainer'>
                    <a href={project.links[1]} target="_blank">
                        <img src={project.gif ? project.gif : '/petsgram.gif'}
                            style={{ width: '100%' }} />
                    </a>
                    <div className="links">
                        <a href={project.links[0]} target="_blank">
                            <Github className="icon" />
                        </a>
                        <a href={project.links[1]} target="_blank">
                            <Link className="icon" />
                        </a>
                    </div>
                </div>
                <p className="w-full">
                    {project.name}
                </p>
                <p>
                    {project.type}
                </p>
            </div>
        </div>
    );
}
