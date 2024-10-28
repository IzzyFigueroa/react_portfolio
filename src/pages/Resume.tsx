
function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>
        Click here to download my <a href="/resume.pdf" download className="resume-download-link">
        Resume
      </a>
      </p>

      <section className="skills">
        <h2>Front-end Proficiencies</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>CSS</li>
        </ul>

        <h2>Back-end Proficiencies</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          
        </ul>
      </section>
      
    </section>
  );
}

export default Resume;