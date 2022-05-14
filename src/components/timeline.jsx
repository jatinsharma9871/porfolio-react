import React from 'react';
import data from "./work.json";
import { Container, Row, Col } from 'react-bootstrap';
import WorkIcon from '@material-ui/icons/Work';
import {Fade} from 'react-reveal';

const Timeline = () => {
    return (
      <Container>
        <Row>
          <Col>
            <Fade left big cascade>
            <ul className="timeline">
            {
                data.map(item => {
                    return (
                      <li className="timeline-item" key={item.id}>
                        <div className="timeline-badge">
                          <WorkIcon className="glyphicon glyphicon-off" />
                        </div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <div className="timeline-heading-div">
                              <h4 className="timeline-title">{item.company}</h4>
                              <span> | </span>
                              <p style={{fontSize:"17px",opacity:"0.4"}}>{item.date}</p>
                            </div>
                            <p className="text">Content Engineer</p>
                          </div>
                          <div className="timeline-body">
                            <p>{item.text}</p>
                          </div>
                        </div>
                      </li>
                    );
                })
            }
            </ul>
            </Fade>
          </Col>
        </Row>
      </Container>
    );
}

export default Timeline;
