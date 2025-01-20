import { useState, useEffect } from "react"

export default function Home() {
    //so know slide on
    const [currentSlide, setSlide] = useState(0);
    //so know if chnage from loop or not
    const [isAutoChange, setIsAutoChange] = useState(1);

    function changeSlide(forward, manual) {
        //gets all the sldies
        let slides = document.querySelectorAll("#carousel semantic")
        //clear all the slides so one shown
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        let nextSlide

        if (forward) {
            nextSlide = (currentSlide + 1) % slides.length;
            slides[nextSlide].style.display = "block";
            setSlide(nextSlide);
        } else if (currentSlide == 0) {
            nextSlide = slides.length - 1;
            slides[nextSlide].style.display = "block";
            setSlide(nextSlide);
        } else {
            nextSlide = (currentSlide - 1)
            slides[nextSlide].style.display = "block";
            setSlide(nextSlide);
        }

        //is done to determine if in the normal or if its a manual click
        if (!manual) {
            //just doing %3 simply so number never get to max int
            let change = (isAutoChange + 1) % 3
            setIsAutoChange(change)
        }
    }


    useEffect(() => {
        setTimeout(() => {

            changeSlide(true, false)

        }, 7000)

        // use[] so it only re-run on every render.
    }, [isAutoChange])


    return (
        <>
            <semantic id="educationTitle">
                <h1>Education</h1>

            </semantic>
            <main id="educationMain">
                <article>
                    <h2>Computer science bsc (Hons)</h2>
                    <p>De Montfort University</p>
                    <p>Awarded Best Student in Second and Final Year</p>

                    <h3>Modules</h3>
                    <semantic id="carousel">
                        <p id="leftArrow" onClick={() => { changeSlide(false, true) }}>{'\u2190'}</p>
                        <p id="rightArrow" onClick={() => { changeSlide(true, true) }}>{'\u2192'}</p>

                        <semantic >
                            <h4>Mobile application development</h4>
                            <p>Grade 86%</p>
                            <p>I worked as part of a team using android
                                studios with Kotlin as the team developed an app for a coffee shop, that would take
                                orders, edit menu items and allow people to purchase items.</p>

                        </semantic>
                        <semantic className="fade">
                            <h4>Development project</h4>
                            <p>Grade 90%</p>
                            <p>I independently developed a stock management
                                system using eclipse, java, JavaFX and MySQL. The application had dynamic menus,
                                CRUD functionality, hashed passwords, it could take info from files and output info to
                                other files, validation and verification.</p>

                        </semantic>
                        <semantic className="fade">
                            <h4>Front end web development</h4>
                            <p>Grade 88%</p>
                            <p>I developed a rock-climbing website that was
                                made using HTML, CSS and JavaScript along with coding techniques such as
                                keyframes, RESTful Apis, JSON and cookies.</p>
                        </semantic>
                        <semantic className="fade">
                            <h4>Functional software development</h4>
                            <p>Grade 92%</p>
                            <p>In this module we used scala following the
                                functional paradigm in the IntelliJ IDE, as I was taught how to manipulate matrix’s from
                                one state to another.</p>
                        </semantic>
                        <semantic className="fade">
                            <h4>Agile team development</h4>
                            <p>Grade 97%</p>
                            <p>worked as part of team following the srum methodology , where we developed a websits using c# and asp.net. and
                                tools such as git and github to help with version control.
                            </p>
                        </semantic>
                    </semantic>
                </article>
                <article>
                    <h2>OCR LEVEL 3 CAMBRIDGE TECHNICAL EXTENDED DIPLOMA IN IT,</h2>
                    <p>NORTHAMPTON COLLEGE</p>
                    <p>Grade</p>
                    <p>Distinction* Distinction* Distinction* </p>
                </article>
                <article>
                    <h2>ALEVELS</h2>
                    <p>NORTHAMPTON COLLEGE</p>
                    <p>Grade</p>
                    <div className="grade">
                        <p>Sociology – C</p>
                        <p>Geography – D </p>
                    </div>
                </article>

                <article>
                    <h2>GCSE</h2>
                    <p>Quinton House</p>
                    <p>Grade</p>
                    <div className="grade">
                        <p>7 GCSEs</p>
                        <p>ranging from</p>
                        <p> D – B </p>
                    </div>
                </article>

            </main>
        </>

    )
}