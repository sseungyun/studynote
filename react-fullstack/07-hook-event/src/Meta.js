import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={props.url} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/** Helment안에서 css 적용하기 */}
        <style type="text/css">{`
            * {
                font-family: 'Noto Sans', sans-serif;
            }

            body {
                margin: 0;
                padding: 30px;
            }
        `}</style>
      </Helmet>
    </HelmetProvider>
  );
};

Meta.defaultProps = {
  title: "React Example",
  description: "React.js 예제입니다. 입니다.",
  keywords: "React",
  author: "신승윤",
  url: window.location.href,
};
export default Meta;
