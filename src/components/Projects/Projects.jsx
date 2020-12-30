import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col,Accordion,Card,Button   } from 'react-bootstrap';

import Hyolo from './Hyolo'
import Itjobgo from './Itjobgo'

import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, info, info2, info3, url, repo, img, id, comp,info4,code,info5 } = project;
            //data.js에 있는 데이터 값에 따라 컴포넌트 분류하는 분기문
            
            let component ='';
            if(comp == 'Hyolo'){
             component= <Hyolo />;
            } else {
               component= <Itjobgo />;
           }
            

            return (
              <Accordion key={id}>
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  > 
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'projectTitle'}</h3>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                          </p>
                          <ul>
                        <li  className="add-info mb-4">{info2 || ''}</li>
                          <li className="add-info mb-4">{info3 || ''}</li>
                            <li className="add-info mb-4">{info4 || ''}</li>
                            <li className="add-info mb-4">{info5 || ''}</li>
                            </ul>
                      </div>

                       
                        <span className="cta-btn cta-btn--hero p-0">
                          <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            DETAIL
                          </Accordion.Toggle>
                          <Card/>    
                        </span>
                        

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                        )}
                         {repo && (
                          <a
                            
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn code text-color-main"
                          href={code}
                        >
                          Code Review
                        </a>
                        )}
                    </div>
                       
                      
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                            <div className="txt"><span>LIVE DEMO</span></div>
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
              <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {component}
                  
                    
                  </Card.Body>
              </Accordion.Collapse>  
          </Accordion>

            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
