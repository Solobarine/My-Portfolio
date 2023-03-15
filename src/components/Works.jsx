import { projects } from "../data";

const Card = ({project}) => {
  return (
    <div className="project">
      <div>
        <div className="project_links">
        {
          project.links.map((item, index) => (
            (item.source)
            ? <a href={item.source} key={index} style={{ backgroundColor: '#eee' }}><img src="/socials/github-sign.png" alt=""/></a>
            : <a href={item.live} key={index}><img src="/logos/internet.png" alt=""/></a>
          ))
        }
        </div>
        <img src={project.image} alt="project.name"/>
      </div>
      <h4>{project.name}</h4>
      <h6>{project.stack}</h6>
      <p>{project.description}</p>
      <ul className="techs">
        {
          project.tech.map((item, index) => (
            <li key={index} style={{color: item.color}}>#&nbsp;{item.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

const Works = () => {
  return (
    <section id="works">
      <h2>My Projects</h2>
      <div id="projects">
        {
          projects.map((project, index) => (
            <Card key={index} project={project} />
          ))
        }
      </div>
    </section>
  )
}

export default Works