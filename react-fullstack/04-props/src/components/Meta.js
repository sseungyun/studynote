import React from 'react'
import { Helmet } from 'react-helmet';
import sample from '../assets/img/sample.png';


             // 
const Meta = (props) => {
  return (
      <Helmet>
          <meta charset="utf-8" />
          <title>{props.title}</title>
          {/* SEO 태그 */}
            {/** og가 안붙어있는건 네이버나 구글 같은 사이트 */}
          <meta name='description' content={props.description} />
          <meta name='keywords' content={props.keywords} />
          <meta name='author' content={props.author} />
            {/** og가 붙어있는건 보통 sns랑 연관되어있음 */}
          <meta property='og:type' content='website'/>
          <meta property='og:title' content={props.title}/>
          <meta property='og:description' content={props.description}/>
          <meta property='og:image' content={props.image}/>
          <meta property='og:url' content={props.url}/>
      {/**리액트에서 이미지 파일을 사용하려면 일단 이미지 파일을 import하고 걸어준다.  */}
        {/** Link는 즐겨찾기 추가할때 생성되는 아이콘!  */}
                {/** 안드로이드용 */}
          <link rel='shortcut icon' href={props.image} type="image/png" />
                {/** 데스크탑 용 */}
          <line rel="icon" href= {props.image} type="image/png" />

          { /** 추가적으로 적용해야할 외부 js나 css로 여기서 명시할 수 있다.  */}
      </Helmet>
   
  );
};

Meta.defaultProps = {
    title: 'React Example',
    description : 'React.js 예제 입니다.',
    keywords: 'React',
    author: '호쌤',
    image: sample,
    url: window.location.href  // 현재 페이지 주소.
};

export default Meta;