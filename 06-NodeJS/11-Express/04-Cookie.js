 /** 직접 구현한 모듈 */
 import logger from '../helper/LogHelper.js';
 import {myip, urlFormat} from '../helper/UtilHelper.js';

 /** 내장모듈 */
 import url from 'url';
 import path from 'path';

 /** 설치가 필요함 모듈 */
import detenv from "dotenv";
import express from 'express'; //Express 본체
import useragent from 'express-useragent';  // 클라이언트의 정보를 조회할 수 있는 기능
import serveStatic from 'serve-static'; // 특정 폴더의 파일을 URL로 노출시킴
import serveFavicon from 'serve-favicon';   // favicon 처리
import bodyParser from 'body-parser';  // POST 파라미터 처리
import methodOverride from 'method-override';   // PUT파라미터 처리
import cookieParser from 'cookie-parser';   // Cookie 처리

/** ------------------------------------------------------------------------------
 * 4) Express 객체의 추가 설정
 ----------------------------------------------------------------------------------*/ 
/** POST 파라미터 수신 모듈 설정. 추가하는 미들웨어들 중 가장 먼저 설정해야 함 */
// body-parser를 이용해 application/x-www-form-urlencoded 파싱
// extended: true --> 지속적사용.
// extended: false --> 한번만 사용.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text()); // TEXT형식의 파라미터 수신 가능.
app.use(bodyParser.json()); // JSON형식의 파라미터 수신 가능.

/** HTTP PUT, DELETE 전송방식 확장 */
// 브라우저 개발사들이 PUT, DELETE 방식으로 전송하는 HTTP Header 이름
app.use(methodOverride('X-HTTP-Method'));   //Microsoft
app.use(methodOverride('X-HTTP-Method-Override'))   //Google/GData
app.use(methodOverride('X-Method-Override'));   // IBM
// HTML 폼에서 PUT,DELETE로 전송할 경우 post방식을 사용하되, action 주소에 "?_mtehod"라고 추가.
app.use(methodOverride('_method')); // HTML form

/** 쿠키를 처리할 수 있는 객체 연결 */
// cookie-parser는 데이터를 저장, 조회 할 때 암호화 처리를 동반한다.
// 이 때 암호화에 사용되는  key문자열을 개발자가 정해야 한다.
app.use(cookieParser(process.env.COOKIE_ENCRYPT_KEY));

/** HTML,CSS,IMG,JS 등의 정적 파일을 URL에 노출시킬 폴더 연결 */
// "http://아이피(혹은 도메일):포트번호" 이후의 경로가 router에 등록되지 않은 경로라면
// static 모듈에 연결된 폴더 안에서 해당 경로를 탐색한다.
app.use('/', serveStatic(process.env.PUBLIC_PATH));

/** favicon 설정 */
app.use(serveFavicon(process.env.FAVICON_PATH));

/** 라우터(URL 분배기)객체 설정 --> 맨 마지막에 설정 */
const router = express.Router();

/** 04-Cookei.js */
// public/04_cookie.html
router
    .post('/cookie', (req, res, next) => {
        // POST로 전달된 파라미터 받기
        const msg = req.body.msg;

        // 일반 쿠키 저장하기 -> 유효시간을 30초로 설정
        res.cookie('my_msg', msg, {
            maxAge: 30*1000,
            path: '/'
        });

        // 암호화된 쿠기 저장하기 -> 유효시간을 30초로 설정
        res.cookie('my_msg_signde', msg, {
            maxAge: 30* 1000,
            path: '/',
            signed: true
        });

        res.status(200).send('ok');
    })
    .get('/cookie', (req, res, next) => {
        // 일반 쿠키값들은 req.cookies 객체의 하위 데이터로 저장된다. (일반 데이터)
        for (let key in req.cookies) {
            const str = '[cookies] ' + key + '=' + req.cookies[key];
            logger.debug(str);
        }

        // 암호화 된 쿠키값들은 req.signedCookies 객체의 하위 데이터로 저장된다.
        for (let key in req.signedCookies) {
            const str = '[signedCookies] ' + key + '=' + req.signedCookies[key];
            logger.debug(str); 
        }

        // 원하는 쿠기값들을 가져온다.
        const my_msg = req.cookies.my_msg;
        const my_msg_signde = req.signedCookies.my_msg_signde;

        const result_data = {
            my_msg: my_msg,
            my_msg_signde: my_msg_signde,
        };

        res.status(200).send(result_data);
    })
    .delete('/cookie', (req, res, next) => {
        // 저장시 domain, path를 설정했다면 삭제시에도 동일한 값을 지정해야 함
        res.clearCookie('my_msg', {path: '/'});
        res.clearCookie('my_msg_signed', {path: '/'});
        res.status(200).send('clear');
    });

    