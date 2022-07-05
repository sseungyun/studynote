/** 
 * 1) 모듈참조
 */

/** 직접 구현한 모듈 */
import logger from '../helper/LogHelper.js';
import {myip, urlFormat} from '../helper/UtilHelper.js';
import { mkdirs, initMulter, checkUploadError, createThumbnail, createThumbnailMultiple} from '../helper/FileHelper.js';

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
import expressSession from 'express-session'; // session ㅊㅓㄹㅣ
import nodemailer from 'nodemailer'; // 메일발송 --> app.use()로 추가 설정 필요 없음.
//import multer from 'multer';    // 업로드 모듈
//import thumbnail from 'node-thumbnail'; // 썸네일 이미지 생성 모듈


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

/** 세션 설정 */
app.use(expressSession({
    // 암호화 키
    secret: process.env.SESSION_ENCRYPT_KEY,
    // 세션이 초기화 되지 않더라도 새로 저장할지 여부 (일반적으로 false)
    resave: false,
    // 세션이 저장되기 전에 기존의 세션을 초기화 상태로 만들지 여부
    saveUninitialized: false
}));

/** HTML,CSS,IMG,JS 등의 정적 파일을 URL에 노출시킬 폴더 연결 */
// "http://아이피(혹은 도메일):포트번호" 이후의 경로가 router에 등록되지 않은 경로라면
// static 모듈에 연결된 폴더 안에서 해당 경로를 탐색한다.
app.use('/', serveStatic(process.env.PUBLIC_PATH));

// 업로드 된 파일이 저장될 폴더를 URL에 노출함
app.use(process.env.UPLOAD_URL, serveStatic(process.env.UPLOAD_DIR));

/** 썸네일 이미지가 저장될 폴더를 URL에 노출함 */
app.use(process.env.THUMB, serveStatic(process.env.THUMB_DIR));

/** favicon 설정 */
app.use(serveFavicon(process.env.FAVICON_PATH));

/** 라우터(URL 분배기) 객체 설정 --> 맨 마지막에 설정 */
const router = express.Router();

// 라우터를 express에 등록
app.use('/', router);

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

/** 05-seesion.js */
// Insomnia로 테스트
   router 
       .post('/session', (req, res, next) => {
           // POST로 전송된 변수값을 추출
           const username = req.body.username;
           const nickname = req.body.nickname;

           // 세션 저장
           req.session.username = username;
           req.session.nickname = nickname;

           // 결과 응답
           const json = { rt: 'ok' };
           res.status(200).send(json);
       })
       .get('/session', (req, res, next) => {
           // 저장되어 있는 모든 session값 탐색
           for (let key in req.session) {
               const str = '[session] ' + key + '=' + req.session[key];
               logger.debug(str);
           }

           // 세션 데이터를 JSON으로 구성 후 클라이언트에게 응답으로 전송
           const my_data = {
               username: req.session.username,
               nickname: req.session.nickname,
           };

           res.status(200).send(my_data);
       })
       .delete('/session', async (req, res, next) => {
           let result = 'ok';
           let code = 200;

           try {
               await req.session.destroy();
           } catch (e) {
               logger.error(e.message);
               result = e.message;
               code = 500;
           }

           const json = { rt: result} ;
           res.status(code).send(json);
       });
// public/06_login.html
router
   .post('/session/login', (req, res, next) => {
       const id = req.body.userid;
       const pw = req.body.userpw;

       logger.debug('id=' + id);
       logger.debug('pw=' + pw);

       let login_ok = false;
       if(id == 'node' && pw == '1234') {
           logger.debug('로그인 성공');
           login_ok = true;
       }

       let result_code = null;
       let result_msg = null;

       if(login_ok) {
           req.session.userid = id;
           req.session.userpw = pw;
           result_code = 200;
           result_msg = 'ok';
       } else {
           result_code = 403;
           result_msg = 'fail';
       }

       const json = { rt: result_msg};
       res.status(result_code).send(json);
   })
   .delete('/session/login', async(req, res, next) => {
       let result = 'ok';
       let code = 200;

       try {
           await req.session.destroy();
       } catch (e) {
           logger.error(e.message);
           result = e.message;
           code = 500;
       }

       const json = { rt: result };
       res.status(code).send(json);
   })
   .get('/session/login', (req, res, next) => {
       const id = req.session.userid;
       const pw = req.session.userpw;

       let result_code = null;
       let result_msg = null;

       if(id !== undefined && pw !== undefined) {
           logger.debug('현재 로그인중이 맞습니다.');
           result_code = 200;
           result_msg = 'ok';
       } else {
           logger.debug('현재 로그인중이 아닙니다.');
           result_code = 400;
           result_msg = 'fail';
       }

       const json = { rt: result_msg };
       res.status(result_code).send(json);
   });

/** 06-SendMail.js */
// public/06-mail.html

router.post('/send_mail', async (req, res, next) => {
    /** 1) 프론트엔드에서 전달한 사용자 입력값 */
    const writer_name = req.body.writer_name;
    let writer_email = req.body.writer_email;
    const receiver_name = req.body.receiver_name;
    let receiver_email = req.body.receiver_email;
    const subject = req.body.subject;
    const content = req.body.content;

    /** 2) 보내는 사람, 받는 사람의 메일주소와 이름 */
    // 보내는 사람의 이름과 주소
    // --> 외부 SMTP 연동시 주의 사항 - 발산주소가 로그인 계정과 다를 경우 발송이 거부됨.
    if(writer_email) {
        // ex) 이광호 <leekh4232@gmail.com>
        writer_email = writer_name + ' <' + writer_email + '>';
    }

    // 받는 사람의 이름과 주소
    if (receiver_name) {
        receiver_email = receiver_name + ' <' + receiver_email + '>';
    }

    /** 3) 메일 발송정보 구성 */
    const send_info = {
        from: writer_email,
        to: receiver_email,
        subject: subject,
        html: content
    };

    /** 4) 발송에 필요한 서버 정보를 사용하여 발송객체 생성 */
    const smtp = nodemailer.createTransport({
        host: process.env.SMTP_HOST,    //SMTP 서버명 : smtp.gmail.com
        port: process.env.SMTP_PORT,    //SMTP 포트 : 456
        secure: true,                   //보안연결(SSL) 필요
        auth: {
            user: process.env.SMTP_USERNAME, //Gmail 로그인에 사용하는 메일 주소
            pass: process.env.SMTP_PASSWORD, //앱 비밀번호
        }
    });

    /** 5) 메일발송 요청 */
    let rt = 200;
    let rtMsg = "OK";

    try {
        await smtp.sendMail(send_info);
    } catch (err) {
        rt = 500;
        rtMsg = err.message;
    }

    res.status(rt).send(rtMsg);
})

/** 06-FileUpload */
/** multer 객체 생성 --> 파일 업로드 환경 설정 수행 */
const multipart = multer({
    /** 저장된 디렉토리 경로 및 파일 이름 */
    storage: multer.diskStorage({
        /** 업로드 된 파일이 저장될 디렉토리 설정 */
        // req는 요청정보, file은 최종적으로 업로드된 결과 데이터가 저장되어 있을 객체
        destination: (req, file, callback) => {
            /**
             * file 파라미터의 형식은 다음과 같다.
             * 
             * file = {
             *  fieldname = 'myphoto',
             *  originalname: '원본파일명.jpg',
             *  encoding: '7bit',
             *  mimetype: 'image/jpeg'
             * }
             */
            console.group('destination');
            console.debug(file);
            console.groupEnd();

            // 업로드 될 폴더를 생성함
            mkdirs(process.env.UPLOAD_DIR);
            mkdirs(process.env.THUMB_DIR);

            // 업로드 정보에 백엔드의 업로드 파일 저장 폴더 위치를 추가한다.
            // 위도우 환경으 고려하여 역슬래시를 슬래시로 변경하는 처리 추가
            file.upload_dir = process.env.UPLOAD_DIR.replace(/\\/gi, '/');
            file.thumb_dir = process.env.THUMB.replace(/\\/gi, '/');

            // multer 객체에게 업로드 경로를 전달
            callback(null, file.upload_dir);
        
            // 업로드 될 폴더를 생성함
            mkdirs(process.env.UPLOAD_DIR);
            // multer 객체에게 업로드 경로를 전달
            callback(null, process.env.UPLOAD_DIR);
        },
        /** 업로드 된 파일이 저장될 파일 이름을 결정함 */
        filename: (req, file, callback) => {
            /**
                file 파라미터는 앞 과정을 통해 정보가 확장된 상태

                file = {
                    fieldname: 'mypthoto',
                    originalname: '원본파일명.jpg',
                    encoding: '7bit',
                    mimetype: 'image/jpeg',
                    upload_dir: '업로드 된 파일이 저장될 경로',
                    thumb_dir: '썸네일 이미지가 생성될 경로'
                }
             */
            console.group('filename');
            console.debug(file);
            console.groupEnd();


            // 파일의 원본 이름에서 확장자만 추출 --> ex) .png
            const extName = path.extname(file.originalname).toLowerCase();
            // 파일이 저장될 이름(현재_시각의_timesTamp + 확장자)
            const saveName = new Date().getTime().toString() + extName;

            // 업로드 정보에 백엔드에 업로드 되어 저장된 파일 이름을 추가한다.
            file.savename = saveName;
            // 업로드 된 파일이 저장된 최종 경로를 추가한다.
            file.path = path.join(file.upload_dir, saveName);
            // 업로드 정보에 파일에 접근할 수 있는 URL값 추가
            file.url = path.join(process.env.UPLOAD_URL, saveName).replace(/\\/gi, '/');
            // 구성된 최종 업로드 정보를 클라이언트에게 응답결과로 돌려주기 위해 req 객체에게 추가
            req.file = file;

            // 다음 단계로 백엔드상에 저장할 파일 이름을 전달

            callback(null, saveName);
        },
    }),
    /** 용량, 최대 업로드 파일 수 제한 설정 */
    limits: {
        files: parseInt(process.env.UPLOAD_MAX_COUNT),
        fileSize: parseInt(eval(process.env.UPLOAD_MAX_SIZE))
    },
    /** 업로드 될 파일의 확장자와 최대 용량 제한 */
    fileFilter: (req, file, callback) => {
        console.log("~~~~~~~~~~~~~~~~~~~~~~");
        // 파일의 확장자를 소문자로 열기 --> ".png" --> "png"
        const extName = path.extname(file.originalname).substring(1).toLocaleLowerCase();

        // 확장자 제한이 있을 경우 필터링
        if(process.env.UPLOAD_FILE_FILTER !== undefined) {
            // "png|jpg|git".indexOf("png")위 처리 결과가 찾지 못했다면?
            if(process.env.UPLOAD_FILE_FILTER.indexOf(extName) == -1) {
                const err = new Error();
                err.result_code = 500;
                err.result_msg = process.env.UPLOAD_FILE_FILTER.replaceAll("|", ", ") + "형식만 업로드 가능합니다.";
                return callback(err);
            }
        }

        callback(null, true);
    }
});

/** publick/07_upload_single.html */
router.route('/upload/single').post((req, res, next) => {
    // 업로드 처리시 배열로 설정
    req.file = [];

    // name 속성이 myphoto인 경우에 대한 업로드를 수행 --> multer 객체가 생성되고 내용이 실행됨
    // <input type="file" name="myphoto" />
    const upload = initMulter().single('myphoto');

    upload(req, res, (err) => {
        console.group('request');
        console.debug(req.file);
        console.groupEnd();

        // 에러여부를 확인하여 결과코드와 메세지를 생성한다.
        let {result_code, result_msg} = checkUploadError(Err);
        
        // 업로드 결과가 성공적이라면 썸네일 생성 함수를 호출한다.
        if(result_code == 200) {
            try {
                createThumbnailMultiple(req.file);
            } catch (error) {
                console.error(error);
                result_code = 500;
                result_msg = "썸네일 이미지 생성에 실패했습니다."
            }
        }

        // 업로드 된 파일의 정보와 결과 코드 및 결과 메세지를 조합하여 응답정보를 구성한다.
        const result = {
            rt: result_code,
            rtmsg: result_msg,
            item: req.file,
        };

        // 준비한 결과값 변수를 활용하여 클라이언트에게 응답을 보냄
        res.status(result_code).send(result);
    });
});

// public/07_upload_multi.html
router.route('/upload/multiple').post((req, res, next) => {
    // 업로드 처리시 배열로 설정
    req.file = [];

    // name 속성이 myphoto인 경우에 대한 업로드를 수행 --> multer 객체가 생성되고 설정 내용이 실행됨
    // <input type="file" name="myphoto" />
    const upload = initMulter().array('myphoto');

    upload(req, res, (err) => {
        console.group('request');
        console.debug(req.file);
        console.groupEnd();

        // 에러여부를 확인하여 결과코드와 메세지를 생성한다.
        let {result_code, result_msg} = checkUploadError(Err);
        
        // 업로드 결과가 성공적이라면 썸네일 생성 함수를 호출한다.
        if(result_code == 200) {
            try {
                createThumbnailMultiple(req.file);
            } catch (error) {
                console.error(error);
                result_code = 500;
                result_msg = "썸네일 이미지 생성에 실패했습니다."
            }
        }

        // 업로드 된 파일의 정보와 결과 코드 및 결과 메세지를 조합하여 응답정보를 구성한다.
        const result = {
            rt: result_code,
            rtmsg: result_msg,
            item: req.file,
        };

        // 준비한 결과값 변수를 활용하여 클라이언트에게 응답을 보냄
        res.status(result_code).send(result);
    });
})