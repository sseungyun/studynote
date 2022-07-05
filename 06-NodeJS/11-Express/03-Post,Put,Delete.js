
/** ---------------------------------------------------
  1) 모듈참조
 -----------------------------------------------------*/

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
import { appendFile } from 'fs';

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

// 라우터를 express에 등록
app.use('/', router);

/** ---------------------------------------------------------- 
 * POST 파라미터를 처리하기 위한 라우터 등록
 * ---------------------------------------------------------- */
router.post('/send_post', (req, res, next) => {
    // URL 파라미터들은 req.body 객체의 하위 데이터로 저장된다.
    logger.debug('[프론트엔드로부터 전달받은 POST 파라미터]');
    for (let key in req.body) {
        const str = '\t >> ' + key + '=' + req.body[key];
        logger.debug(str);
    }

    const html = "<h1><span style='color:#0066ff'>" + req.body.username + "</span>님의 이메일 주소는 <span style='color:#ff6600'>" + req.body.email + '</span>입니다.</h1>';

    res.status(200).send(html);
});

/** PUT 파라미터를 처리하기 위한 라우터 등록 */
router.put('/send_put', (req, res, next) => {
    // URL 파라미터들은 req.body 객체의 하위 데이터로 저장된다.
    logger.debug('[프론트엔드로부터 전달받은 PUT 파라미터]');
    for (let key in req.body) {
        const str = '\t >> ' + key + '=' + req.body[key];
        logger.debug(str);
    }

    const html  = "<h1><span style='color:#0066ff'>" + req.body.username + "</span>님은 <span style='color:#ff6600'>" + req.body.grade + '</span>학년 입니다.</h1>';

    res.status(200).send(html);
});

/** DELETE 파라미터를 처리하기 위한 라우터 등록 */
router.delete('/send_delete', (req, res, next) => {
    // URL 파라미터들은 req.body 객체의 하위 데이터로 저장된다.
    logger.debug('[프론트엔드로부터 전달받은 DELETE 파라미터]');
    for (let key in req.body) {
        const str = '\t >> ' + key + '=' + req.body[key];
        logger.debug(str);
    }

    const html = "<h1><span style='color:#0066ff'>" + req.body.username + "</span>님의 점수는 <span style='color:#ff6600'>" + req.body.point + '</span>입니다.</h1>';

    res.status(200).send(html);
});

/** 상품에 대한 Restful API 정의하기 */
// 위의 행태처럼 개별적인 함수로 구현 가능하지만 대부분 하나의 URL에 메서드 체인을 사용해서 4가지 전송방식을 한번에 구현
router
    .get('/product/:productNumber', (req, res, next) => {
        //URL Params 형식으로 조회할 상품의 일련번호를 전달받아야 한다.
        const html = "<h1><span style='color:#0066ff'>" + req.params.productNumber + "</span>번 상품 <span style='color:#ff6600'> 조회 </span>하기.</h1>";
        res.status(200).send(html);
    })
    .post('/product', (req, res, next) => {
        // <form>상에 저장할 상품 정보를 입력 후 전송한다. (주로 관리자 기능)
        // 저장시에는 일련번호는 전송하지 않으며 저장 후 자동으로 발급되는 일련번호를 프론트에게 돌려줘야 한다.
        const html = "<h1><span style='color:#0066ff'>" + req.params.productNumber + "</span>번 상품 <span style='color:#ff6600'> 등록 </span>하기.</h1>";
        res.status(200).send(html);
    })
    .put('/product/:productNumber', (req, res, next) => {
        // form 상에 수정 상품 정보를 입력 후 전송한다. (주로 관리자 기능)
        // 몇번 상품을 수정할지 식별하기 위해 일련번호가 함께 전송된다.
        const html = "<h1><span style='color:#0066ff'>" + req.params.productNumber + "</span>번 상품 <span style='color:#ff6600'> 수정 </span>하기.</h1>";
        res.status(200).send(html);
    })
    .delete('/product/:productNumber', (req, res, next) => {
        //URL Params 형식으로 조회할 상품의 일련번호를 전달받아야 한다.
        const html = "<h1><span style='color:#0066ff'>" + req.params.productNumber + "</span>번 상품 <span style='color:#ff6600'> 삭제 </span>하기.</h1>";
        res.status(200).send(html);
    })
