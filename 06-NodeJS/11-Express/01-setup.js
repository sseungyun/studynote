/**
 * 1)모듈 참조
 */
/** 직접 구현한 모듈 */
import logger from "../helper/LogHelper";
import { myip, urlFormat } from "../helper/UtilHelper";

/** 내장 모듈 */
import url from 'url';
import path from 'path';
/** 설치가 필요한 모듈 */
import detenv from "dotenv";
import express, { router } from 'express';// Express 본체
import useragent from 'express-useragent';  // 클라이언트의 정보를 조회할 수 있는 기능
import serveStatic from "serve-static"; // 특정 폴더의 파일을 URL로 노출시킴
import serveFavicon from 'serve-favicon';   // favicon 처리
import { appendFile } from "fs";

/*--------------------------------------------------------------------------------------
* 02-GETParams.js 
---------------------------------------------------------------------------------------*/
router.get('/send_get', (req, res, next) => {
    // GET파라미터들은 req.query 객체의 하위데이터로 저장된다.
    logger.debug('[프론트엔드로부터 전달받은 GET 파라미터]');
    for( key in req.query) {
        const str = '\t >> ' + key + '=' + req.query[key];
        logger.debug(str);
    }

    // /send_get?answer=0000 형태로 접근한 경우 answer 파라미터 값 추출
    // const answer = req.query['answer'];
    const answer = req.query.answer;
    let html = null;

    if (parseInt(answer) == 300) {
        html = "<h1 style='color:#0066ff'>정답입니다.</h1>";
    } else {
        html = "<h1 style='color:#ff6600'>틀렸습니다.</h1>";
    }

    res.status(200).send(html);
});

router.get('/send_url/:username/:age', (req, res, next) => {
    // URL 파라미터들은 req.params 객체의 하위 데이터로 저장된다.
    // 전달받은 URL 파라미터는 GET파라미터와 같은 방법으로 사용 가능함.
    logger.debug('[프론트엔드로부터 전달받은 URL 파라미터');
    for (key in req.params) {
        const str = '\t >> ' + key + '=' + req.params[key];
        logger.debug(str);
    }

    const html = "<h1><span style='color:#0066ff'>" + req.params.username + "</span>님은 <span stype='color:#ff6600>" + req.params.age + '</span>세 입니다.</h1>'   
    
    res.status(200).send(html);
});

/**-------------------------------------------------
 *  3) 클라이언트의 접속시 초기화 
 * --------------------------------------------------*/
/** app 객체에 UserAgent 모듈을 탑재 */
// --> Express객체(app)에 추가되는 확장 기능들을 Express 에서는 미들웨어라고 부른다.
// --> UserAgent 모듈은 초기화 콜백함수에 전달되는 req.res 객체를 확장하기 때문에 다른 모듈들 보다 먼저 설정되어야 한다.
app.use(useragent.express());

// 클라이언트의 접속을 감지
app.use((req, res, next) => {
    logger.debug('클라이언트가 접속했습니다.');

    // 클라이언트가 접속한 시간
    const begintime = Date.now();

    // 클라이언트의 IP주소(출처: 스택오버플로우)
    const ip = req.headers['x-forwarded-for'] || req.connecion.remoteAddress || req.socket.remoteAddress || req.connecion.socket.remoteAddress;

    // 클라이언트의 디바이스 정보 기록 (UserAgent 사용)
    logger.debug(`[clinet] ${ip} / ${req.useragent.os} / ${req.useragent.browser} (${req.useragent.version} / ${req.useragent.platform}`);

    // 클라이언트가 요청한 페이지 URL
    // 콜백함수에 전달되는 req 파라미터는 클라이언트가 요청한 URL의 각 부분을 변수로 담고 있다.
    const current_url = urlFormat({
        protocol : req.protocol, // ex) http://
        host: req.get('host'),  // ex) 172.16.141.1
        port: req.port, // ex) 3000
        pathname: req.originalURL, // ex) /page1.html
    });

    logger.debug(`[${req.method}] ${decodeURIComponent(current_url)}`)

    // 클라이언트의 접속이 종료된 경우의 이벤트 --> 모든 응답의 전송이 완료된 경우
    res.on('finish', () => {
        // 접속 종료시간
        const endTime = Date.now();

        // 이번 접속에서 클라이언트가 머문 시간 = 백엔드가 실행하는게 걸린 시간
        const time = endTime - begintime;
        logger.debug(`클라이언트의 접속이 종료되었습니다. ::: [runtime] ${time}ms`);
        logger.debug('-------------------------------------------------------------')
    });
    // 이 콜백함수를 종료하고 요청 URL에 연결된 기능으로 제어를 넘김
    next();
});

/** ----------------------------------------------------
 * 4) Express 객체의 추가 설정
 * -----------------------------------------------------*/
/** HTML,CSS,IMG,JS 등의 정적 파일을 URL에 노출시킬 폴더 연결 */
// "http://아이피(혹은 도메인):포트번호" 이후의 경로가 router에 등록되지 않은 경로라면
// static 모듈에 연결된 폴더 안에서 해당 경로를 탐색한다.
app.use('/', serveStatic(process.env.PUBLIC_PATH));

/** favicon 설정 */
app.use(serveFavicon(process.env.FAVICON_PATH));

/** 라이터 (URL 분배기) 객체 설정 --> 맨 마지막에 설정 */
const router = express.Router();

// 라우터를 express에 등록
app.use('/', router);

/**
 * 5) 각 URL 별 백엔드 기능 정의
 */
/** 01-setup.js */
// router.route(path).get|post|put|delete((req, res, next) => {})
router.get('/page1', (req, res, next) => {
    // 브라우저에게 전달할 응답 내용
    let html = '<h1>Page1</h1>';
    html += "<h2>Express로 구현한 Node.js 백엔드 페이지</h2>";

    /** 응답보내기(1) - Node 순정 방법 */
    // res.writeHead(200);
    // res.write(html);
    //  res.end();

    /** 응답보내기(2) - Express의 간결화된 방법 */
    // res.status(200);
    // res.send(html);

    // 메서드 체인 기능
    res.status(200).send(html);
});

router.get('/page2', (req, res, next) => {
    // 브라우저에게 전달할 응답 내용
    let html = '<h1>Page2</h1>';
    html += '<h2>Node.js Backend Page</h2>';
    res.status(200).send(html);
});

router.get('/page3', (req, res, next) => {
    // 페이지 강제 이동
    res.redirect('https://www.naver.com')
})

/** ----------------------------------------------------------
 * 6) 설정한 내용을 기반으로 서버 구동 시작
-----------------------------------------------------------*/
const ip = myip();

app.listen(process.env.PORT, () => {
    logger.debug('--------------------------------------------------');
    logger.debug('|               Start Express Server             |')
    logger.debug('--------------------------------------------------');

    ip.forEach((v, i) => {
        logger.debug(`server address => http://${v}:${process.env.PORT}`);
    });

    logger.debug('----------------------------------------------------');
});

