/**
 * @FileName: FileHelper.js
 * @Description: 파일, 폴더 처리 관련 유틸리티 함수 구현
 * @Author: EZEN 아카데미 Node.js강의
 */

import fs from 'fs';
import {join} from 'path';
import multer from 'multer';    // 업로드 모듈
import thumbnail from 'node-thumbnail'; // 썸네일 이미지 생성 모듈

const mkdirs = (target, Permission='0755') => {
    // 경로가 없다면 수행하지 않는다.
    if(target == undefined || target == null) {return;}

    // 윈도우의 경우 '\' '/'로 변환.
    target = target.replace(/\\/gi, "/");
    // node.js 17버전 이상 가능.
    // --> target == "a/b/c"
    // target = target.replayceAll("\\", "/");

    // 주어진 경로값을 "/"단위로 자른다.
    // --> target_list = ["a", "b", "c"]
    const target_list = target.split("/");

    // 한 단계씩 생성되는 폴더 깊이를 누적할 변수
    let dir = '';

    // 주어진 경로가 절대경로 형식이라면 경로를 누적할 변수를 "/" 부터 시작한다.
    if (target.substring(0, 1) == "/") {
        dir = "/";
    }

    // 윈도우의 경우 하드디스크 문자열을 구분하기 위해 ":" 이 포함되어 있다.
    if(target_list[0].indexOf(":") > -1) {
        target_list[0] += "/"
    }

    // 잘라낸 배열만큼 순환하면서 디렉토리를 생성
    target_list.map((v, i) => {
        dir = join(dir, v);

        // 현재 폴더를 의미한다면 이번 턴은 중단
        if (v == ".") {
            return;
        }

        // console.debug(dir);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            fs.chmodSync(dir, Permission);
        }
    });
};



export {mkdirs}