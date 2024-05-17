'use client'

import Image from "next/image";
import "./ProjectSlider.css";
import { useState } from "react";
import { Github, Link } from "lucide-react";
import MainCard from "./MainCard";
import SecondaryCard from "./SecondaryCard";

export default function ProjectSlider() {
    const [currentSlide, setCurrentSlide] = useState(1);

    const projects = [
        {
            name: "Petsgram",
            type: "(Social media website)",

            desc: [
                "Sign in/Sign up",
                "Add Posts/Comments/Likes",
                "Delete posts/comments",
                "Follow/Unfollow other users",
                "Search Users",
                "Notifications",
                "Explore Page/Following Page",
            ],
            tags: ["JavaScript", "React", "Express", "Node.js", "Postgres"],
            image: "/img/portfolio/7.PNG",
            links: [
                "https://github.com/hebahiari/petsgram",
                "https://petsgram.hebahiari.com/",
            ],
        },

        {
            name: "IssueTracker",
            type: "(Issue Tracker website)",
            desc: [
                "Add, Update and Delete issues",
                "Assign issues to different users",
                'Login/Logout using Google Auth',
                'Filter/Sort issues by name, date and status',
                "Add comments to issues",
                "Dashboard displaying a summary of existing Issues"
            ],
            tags: ["Next.js", "TypeScript", "Prisma", "Radix UI"],
            image: "/img/portfolio/10.png",
            links: [
                "https://github.com/hebahiari/issue-tracker",
                "https://issuetracker.hebahiari.com/",
            ],
        },

        {
            name: "SmartNotes",
            type: "(Note App with AI Integration)",
            desc: [
                "Add, Update and Delete Notes",
                "ChatBot that can analyze questions and find related notes",
                "Login/Logout using Clerk",
            ],
            tags: ["Next.js", "TypeScript", "OpenAI", "Pinecone", "Clerk"],
            image: "/img/portfolio/11.png",
            links: [
                "https://github.com/hebahiari/ai-notes",
                "https://smartnotes.hebahiari.com/",
            ],
        },

        {
            name: "TechWearCo",
            type: "(E-commerce website)",
            desc: [
                "Explore items by category",
                "Add items to cart",
                "Remove items from cart",
                "Checkout",
                "Filter items by price or category",
                "Sort items by price (lowest to highest, highest to lowest)",
            ],
            tags: ["JavaScript", "React", "Redux", "SCSS", "Strapi", "Stripe"],
            image: "/img/portfolio/5.jpg",
            links: [
                "https://github.com/hebahiari/ecommerce",
                "https://techwearco.hebahiari.com/",
            ],
        },

        {
            name: "Flower Image Classifier",
            type: "(Image Classifier)",
            desc: [
                "Classifies pictures of flowers and returns type predictions",
                "Trained deep learning model for flower classification",
                "Used transfer learning with pre-trained VGG11 model",
                "Demonstrated expertise in data preprocessing and model evaluation",
                "Created efficient inference pipeline for real-world predictions",

            ],
            tags: ["Python", "PyTorch", "Matplotlib", "PIL", "React"],
            image: "/img/portfolio/9.png",
            links: [
                "https://github.com/hebahiari/flower-classifier",
                "https://flowers.hebahiari.com/",
            ],
        },


        {
            name: "TechTopic",
            type: "(Blog/Social Website)",
            desc: [
                "Sign in/Sign up with Google",
                "Sign in/Sign up with Credentials",
                "Add Posts",
                "Delete Posts",
                "Explore Page to view all posts",
                "Contact us to send a message",
                "Dark/Light mode",
            ],
            tags: ["JavaScript", "Next.js", "React", "MongoDB"],
            image: "/img/portfolio/TechTopic.png",
            links: [
                "https://github.com/hebahiari/techtopic",
                "https://techtopic.hebahiari.com/",
            ],
        },

        {
            name: "Trivia Night",
            type: "(Quiz Game)",
            desc: [
                "Select difficulty",
                "Answer questions before time runs out",
                "Score is displayed at the end",
                "Restart",
            ],
            tags: ["TypeScript", "React", "MUI"],
            image: "/img/portfolio/8.PNG",
            links: [
                "https://github.com/hebahiari/quiz-app",
                "https://trivia.hebahiari.com/",
            ],
        },

        {
            name: "Booked.",
            type: "(Scheduling website)",
            desc: [
                "View all reservation for a specified date",
                "Create new reservations",
                "Cancel/edit/update existing reservations",
                "Search for a reservation by phone number",
                "Seat a reservation at a table",
                "Create New Tables/ Clear existing tables",
                "View all tables and whether they are occupied or open",
                "Includes built in validation to make sure reservations are at valid times",
            ],
            tags: ["JavaScript", "React", "Node.js", "Express", "Knex"],
            image: "/img/portfolio/1.jpg",
            links: [
                "https://github.com/hebahiari/restaurant-reservation",
                "https://booked.hebahiari.com/",
            ],
        },

        {
            name: "Flashcard-o-matic",
            type: "(Studying flashcards)",
            desc: [
                "Create a deck of flashcards",
                "Edit/delete decks",
                "Add flashcards to deck",
                "Edit/delete flashcards",
                "Study deck by going through the cards and flipping to see the answer",
            ],
            tags: ["JavaScript", "React", "Bootstrap"],
            image: "/img/portfolio/4.jpg",
            links: [
                "https://github.com/hebahiari/flashcard-app",
                "https://flashcards.hebahiari.com/",
            ],
        },

        {
            name: "GrubDash",
            type: "(Food ordering)",
            desc: ["Add food order to cart", "View food orders", "Edit/delete order"],
            tags: ["Javascript", "Express", "Node.js", "Postgres"],
            image: "/img/portfolio/2.jpg",
            links: ["https://github.com/hebahiari/GrubDash"],
        },

        {
            name: "WeLoveMovies",
            type: "(Movies library)",
            desc: [
                "Displays a list of movies",
                "Shows Available Theatures",
                "Shows the reviews on each movie",
            ],
            tags: ["JavaScript", "React", "Express", "Node.js", "Postgres", "Knex"],
            image: "/img/portfolio/3.jpg",
            links: ["https://github.com/hebahiari/we-love-movies"],
        },
    ];

    const previousSlide = () => {
        setCurrentSlide((currentSlide) =>
            currentSlide === 0 ? projects.length - 1 : currentSlide - 1
        );
    };

    const nextSlide = () => {
        setCurrentSlide((currentSlide) =>
            currentSlide === projects.length - 1 ? 0 : currentSlide + 1
        );
    };

    // useEffect(() => {
    //     setInterval(() => nextSlide(), 4000); // this will make it click again every 1000 miliseconds
    // }, []);

    return (
        <div className="slider">
            <div
                className="container"
                style={{ transform: `translateX(-${currentSlide * 20}vw)`, width: `${(projects.length) / 3 * 100}vw` }}
            >
                {/* <SecondaryCard project={projects[currentSlide - 1]} index={currentSlide - 1} />
                <MainCard project={projects[currentSlide]} index={currentSlide} />
                <SecondaryCard project={projects[currentSlide + 1]} index={currentSlide + 1} /> */}

                {projects.map((project, index) => {
                    return (
                        <>
                            {
                                index === currentSlide ?
                                    <MainCard project={project} index={index} /> :
                                    <SecondaryCard project={project} index={index} />
                            }
                        </>
                    )
                })}

            </div>
            <div className="icons">
                <div className="icon" id="clickButton" onClick={previousSlide}>
                    left
                </div>
                <div className="icon" onClick={nextSlide}>
                    right
                </div>
            </div>
        </div>
    );
}
