import './Hero.css'; // Optional external CSS
import mypic from "../../assets/mypic.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h3>Hi my name is</h3>
        <h1>Kamlesh Sahu</h1>
        <p><strong>
          Fullstack Developer with a non-technical background in Toll Automation, bringing a unique blend of real-world problem-solving and user-centric thinking to web development. Proficient in both frontend and backend technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB. Passionate about building scalable, secure, and responsive web applications that offer seamless user experiences. Adept at bridging the gap between UI design and server logic, with a strong focus on performance, accessibility, and maintainability.
          </strong> 
        </p>
        <p>
          +91 8223038394 | kamleshsahur@gmail.com
        </p>
      </div>
      <div className="hero-image">
        <img src={mypic} alt="Kamlesh Sahu" />
      </div>
    </section>
  );
};

export default Hero;