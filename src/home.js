export default function Home(){
    return (
        <main id="homeMain">
            <div>
            <div id="HomeTitle">
            <h1>George Finch</h1>
            <p>Software engineer</p>
            </div>
            <img id="laptopImg" className="homeImg" alt="a laptop on a bench next to a coffe"src="https://picsum.photos/id/2/300/400"></img>
           </div>
           <div>
           <img id ="gradImg" className="homeImg"src ="./../lib/images/graduation.jpg" alt="an image of george at graduation"></img>
           
           <section id="aboutGeorge">
            <h2>About George</h2>
            <p>I am a graduate of De Montfort university, where I studied computer science and achieved a first-
        class honors along with being top of my class in the second and final year. During my time at university, I
        
        have been able to hone my problem-solving skills as well as my ability to work in a team and
        communicate effectively. I am looking for an opportunity in software development, that will challenge my
        coding skills and allow me to be a part of an effective and friendly team</p>
        </section>
        </div>
        </main>

    )
}