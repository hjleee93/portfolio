/* eslint-disable react/require-default-props */
/* eslint-disable react/no-danger */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/html-has-lang */
import React from 'react';
import PropTypes from 'prop-types';

export default function HTML({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  postBodyComponents,
  body,
}) {
  return (
    <html {...htmlAttributes}>
      <head>
        <title>현로그</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="title" content="현로그, HYEONLOG"/>
        {headComponents}
        <meta name="google-site-verification" content="tNI6WVm9OyxcGQVBT3CgLdTly4qgWh1R_ZRBSrn1RVk" />
        <meta name="naver-site-verification" content="acfbd608ac455fcd55f0141d749b88ec6d3d34e6" />
        <meta name="description" content="안녕하세요. 신입 웹 개발자 이현정입니다."/>
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
