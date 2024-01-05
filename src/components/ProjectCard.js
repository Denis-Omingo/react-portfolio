import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, github,livedemo }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="btns">
              <a href={github} target='_blank'className='button'>Github</a>
              <a href={livedemo} target='_blank'className='button'>Live View</a>
          </div>
        </div>
      </div>
    </Col>
  )
}