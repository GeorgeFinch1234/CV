import { useState, useEffect } from "react"

export default function Home() {
    const [currentSlide, setSlide] = useState(0);
    
    
    
    useEffect(() => { setTimeout(()=>{

        //gets all the sldies
        let slides = document.querySelectorAll("#carousel div")
     
       

        
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
           

            

            const nextSlide = (currentSlide + 1) % slides.length;
            slides[nextSlide].style.display = "block";
            setSlide(nextSlide);
       //seven second timer
     },7000) }, [currentSlide])
    return (
        <>
            <div id="educationTitle">
                <h1 >Eductaion</h1>
                <p>This pages shows a list of my past education</p>
            </div>
            <main id="educationMain">
                <article>
                    <h2>Computer science bsc(Hons)</h2>
                    <p> De monthfor uni</p>
                    <p> best second year student</p>

                    <h3>Modules</h3>
                    <div id="carousel">
                        <div >
                            <h4>Mobile application development</h4>
                            <p> grade 86%</p>
                            <p>I worked as part of a team using android
                                studios with Kotlin as the team developed an app for a coffee shop, that would take
                                orders, edit menu items and allow people to purchase items.</p>

                        </div>
                        <div className="fade">
                            <h4>Development project</h4>
                            <p> grade 90%</p>
                            <p>90%. I independently developed a stock management
                                system using eclipse, java, JavaFX and MySQL. The application had dynamic menus,
                                CRUD functionality, hashed passwords, it could take info from files and output info to
                                other files, validation and verification.</p>

                        </div>
                        <div className="fade">
                            <h4>Front end web development</h4>
                            <p> grade 88%</p>
                            <p>I developed a rock-climbing website that was
                                made using HTML, CSS and JavaScript along with coding techniques such as
                                keyframes, RESTful Apis, JSON and cookies.</p>
                        </div>
                        <div className="fade">
                            <h4>Functional software development</h4>
                            <p> grade 92%</p>
                            <p>In this module we used scala following the
                                functional paradigm in the IntelliJ IDE, as I was taught how to manipulate matrix’s from
                                one state to another.</p>
                        </div>
                        <p id="leftArrow" >{"\u2190"}</p>
                        <p id="rightArrow" >{"\u2192"}</p>
                    </div>
                </article>
                <article>
                    <h2>OCR LEVEL 3 CAMBRIDGE TECHNICAL EXTENDED DIPLOMA IN IT,</h2>
                    <p>NORTHAMPTON COLLEGE</p>
                    <p>grade</p>
                    <p>Distinction* Distinction* Distinction* </p>
                </article>
                <article>
                    <h2>ALEVELS,,</h2>
                    <p>NORTHAMPTON COLLEGE</p>
                    <p>grade</p>
                    <p>Sociology – C
                        Geography – D </p>
                </article>
                <article>
                    <h2>GCSE</h2>
                    <p>Quinton House</p>
                    <p>grade</p>
                    <p>7 GCSE – ranging from D – B </p>
                </article>

            </main>
        </>

    )
}