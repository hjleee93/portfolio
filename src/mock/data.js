import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  github: 'https://github.com/hjleee93',
  blog: 'https://hjleee93.github.io/',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'hyolo_logo.png',
    title: 'HYOLO',
    info:
      '파트너로 가입한 회원들은 직접 서비스를 제공하는 업체를 등록하거나 예약을 만들 수 있고' +
      '등록된 업체는 관리자가 관리하며 전반적인 사이트 관리 할 수 있습니다' +
      '일반회원은 원하는 지역, 날짜, 키워드로 검색하여 바로 예약 할 수 있는 예약관리사이트입니다.',
    info2: '이미지를 클릭하면 LIVE DEMO 사이트를 확인 하 실 수 있습니다. ',
    info3: 'Source Code버튼 클릭시 해당 깃헙으로 연결됩니다',
    url: 'http://rclass.iptime.org:9999/20AM_HYOLO/',
    repo: 'https://github.com/hjleee93/semiProject',
  },
  {
    id: nanoid(),
    img: 'itjobgo.jpg',
    title: 'ITJOBGO',
    info:
      '다양한 기능의 IT전문 종합 구직사이트를 구현하고자 하였습니다. 구인구직 정보 제공, 프로젝트(포트폴리오) 협업 매칭 공간 제공, 전문 컨설턴트를 통한 이력서첨삭,  기술질의응답' +
      '기능들을 구성하여 구직자의 편의성을 높였습니다.',
    info2:
      '이미지를 클릭하면 LIVE DEMO 사이트를 확인 하 실 수 있습니다. (배포용 사이트는 현재 수정중입니다.)',
    info3: 'Source Code버튼 클릭시 해당 깃헙으로 연결됩니다',
    url: 'http://rclass.iptime.org:9999/20AM_ITJOBGO_BOOT_FINAL/',
    repo: 'https://github.com/hjleee93/FinalProject_Front',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '제 포트폴리오를 끝까지 봐주셔서 감사합니다😀',
  btn: '',
  email: 'hjleee93@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hjleee93',
    },
  ],
};
