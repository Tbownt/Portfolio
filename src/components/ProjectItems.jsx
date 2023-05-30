/* eslint-disable react/prop-types */

import { Col } from "react-bootstrap";

export const ProjectItems = ({
  title,
  description,
  repository,
  image,
  link,
}) => {
  return (
    <Col size={12} sm={12} md={6}>
      <div className="proj-imgbx">
        <img src={image} alt={title} />
        <div className="proj-txtx">
          <h4 className="d-none d-lg-block">{title}</h4>
          <span
            className="d-none d-lg-block"
            style={{ fontSize: "15px", fontStyle: "normal" }}
          >
            {description}
          </span>
          <br />
          <a
            href={link}
            className="tagline my-2"
            rel="noreferrer"
            target="_blank"
          >
            Deploy
          </a>
          <a
            className="tagline"
            href={repository}
            target="_blank"
            rel="noreferrer"
          >
            Repository
          </a>
        </div>
        <div className="proj-txtx2 align-items-center text-center mb-5 d-lg-none">
          <h4 style={{ marginTop: "15px" }}>{title}</h4>
          <span>{description}</span>
          <br></br>
          <a
            className="tagline my-2"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Deploy
          </a>
          <a
            className="tagline"
            href={repository}
            target="_blank"
            rel="noreferrer"
          >
            Repository
          </a>
        </div>
      </div>
    </Col>
  );
};
