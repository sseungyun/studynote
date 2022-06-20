/**
 * @filename: Meta.js
 * @description: <head>태그 내의 SEO 처리 및 기본 참조 리소스 명시
 * @author: 신승윤
 */

/** 패키지 참조 */
// 기본 참조 객체
import React from 'react';
// SEO 처리 기능 패키지
import { Helmet, HelmetProvider } from 'react-helmet-async';

// 이 경로에 적절한 이미지를 직접 배치해야 한다.
import sample from './assets/img/1.png';
/**
 * SEO 처리 컴포넌트
 * @param props
 * @returns {JSX.Element}
 */
const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet='utf-8' />
                {/* SEO 태그 */}
                <title>{props.title}</title>
                <meta name='description' content={props.description} />
                <meta name='keywords' content={props.keywords} />
                <meta name='author' content={props.author} />
                <meta property='og:type' content='website' />
                <meta property='og:title' content={props.title} />
                <meta property='og:description' content={props.description} />
                <meta property='og:url' content={props.url} />
                <link rel='shortcut icon' href={props.image} type="image/png" />
                <link rel='icon' href={props.image} type="image/png" />
                
            </Helmet>
        </HelmetProvider>
    );
};

/**
 * props에 대한 기본값 설정
 * @type {{keywords: string, author: string, description: string, title: string, url: string}}
 */
Meta.defaultProps = {
    title: 'React OpenAPI연동',
    description: 'React.js로 만든 Redux활용 카카오 검색 OpenAPI 연동 예제입니다..',
    keywords: 'React,Redux,Kakao, OpenAPI',
    author: '신승윤',
    image: sample,
    url: window.location.href
};

export default Meta;
