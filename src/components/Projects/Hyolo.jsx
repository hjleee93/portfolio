import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';

import Title from '../Title/Title';
import SwiperImg from '../Image/SwiperImg';
import PortfolioContext from '../../context/context';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Hyolo = () => {
    
  const { hyolo } = useContext(PortfolioContext);
  const { img } = hyolo;
  return (
    <section id="hyolo">
      <Container>
                 <Title title="HYOLO" />
                 <Fade bottom duration={1000} delay={1200} distance="0px">
                 <p>핫플레이스 예약 관리 사이트</p>
                 <p>JSP/Servlet을 기반으로 전반적인 웹사이트의 서버 연결과 View를 개발하였고 일부 비동기 통신이 필요한 파트는 Ajax를 사용하여 구현하였습니다.<br/>
                      데이터베이스는 JDBC를 사용하여 오라클을 연동하였습니다.<br />클라이언트 페이지의 대부분은 JavaScript를 사용하였고 디자인과 반응형 웹 사이트를 위해 Bootstrap을 사용하였습니다.</p>
                      </Fade>
        <Fade bottom duration={1000} delay={800} distance="30px">
                      <div className="contact-wrapper">
                           <Swiper
                              spaceBetween={50}
                              slidesPerView={1}
                              navigation
                              pagination={{ clickable: true }}
                              scrollbar={{ draggable: true }}
                         >
                                <SwiperSlide>
                <div id="slide1">
                <div className="hyolo-img">
                    <SwiperImg alt="img" filename={img} />
                    </div>
                                          <div className="img-text">
                                               <p>캘린더 선택창은 Datepicker를 사용하여 구현 하였습니다.</p>
                                        
                                               <p>검색 기능은 POST 방식으로 form을 전달하여 검색기능을 구현하였습니다.
                                               업체 회원이 예약 날짜를 설정해둔 업체만 추천 항목이 뜨도록 구현하였습니다.</p>
                                          </div>
                                          
                                     </div>
                                </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      
    </Swiper>
                           
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Hyolo;