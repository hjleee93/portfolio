import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, resume, blog } = about;

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
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">안녕하세요. 신입 웹 개발자 이현정입니다!</p>
                <p className="about-wrapper__info-text">
                  오늘 보다 더 나은 내일의 Web Developer가 되기 위해 공부하는 주니어 웹 개발자
                  입니다. 시작이 반이라는 말처럼 좋은 시작 역시 중요한 부분 중에 하나라고
                  생각합니다.
                </p>
                <p className="about-wrapper__info-text">
                  하지만 그 시작을 실천하는 것보다 꾸준하게 끝까지 해내는 것이 더 어렵다고 합니다.
                  이렇듯 더 발전된 내일의 개발자가 되기 위해 꾸준한 모습을 보여드리겠습니다
                </p>
                <p className="about-wrapper__info-text">
                  공부내용을 지속적으로 블로그에 업데이트 중입니다
                </p>
                <div>
                  {resume && (
                    <span>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--resume"
                        href={resume}
                      >
                        Resume
                      </a>
                    </span>
                  )}
                  <span className="ml-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={blog}
                    >
                      Blog
                    </a>
                  </span>
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
