import workItems from "../data";

function Work() {
    

    return (
      <>
        <h4 className="text-center">My Work</h4>

  
        <section id="work" className="work-output">
          {/* Callback function does not require {} . YOu need () becasue we dont want to add a return statement. It will not loop.*/}
  
  {/* map return an ARRAY */}
        {workItems.map((workObj, index) => (
            <article key={index} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(${workObj.backgroundImage})`}}>
            <h5>{workObj.title}</h5>
            <p>{workObj.description}</p>
          </article>
             ))}
        </section>
      </>
    )
  }
  
  export default Work;

  /* Callback function does not require {} . YOu need () becasue we dont want to add a return statement. It will not loop.*/

//   REACT is a library becasue it doesnt come with everything
// Bootstrap is a framework