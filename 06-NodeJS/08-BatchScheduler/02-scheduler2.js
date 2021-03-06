/**
 * 스케줄에 따른 자동 수행
 */
/** 1) 필요한 패키지 참조하기 */
import logger from "../helper/LogHelper";
import schedule from 'node-schedule';

/** 2) 매 분 30초마다 수행 */
const rule1 = new schedule.RecurrenceRule();
rule1.second = 30;
schedule.scheduleJob(rule1, () => logger.info('매분 ' + rule1.second + '초 마다 수행!!'));

/** 3) 매 시간 10분 45초마다 수행 */
const rule2 = new schedule.RecurrenceRule();
rule2.minute = 3;
rule2.second = 10;
schedule.scheduleJob(rule2, () => logger.debug('매시간' + rule2.minute + '분' + rule2.second + '초 마다 수행!!'));

/** 4) 매일 17시 10분 55초 마다 수행 */
const rule3 = new schedule.RecurrenceRule();
rule3.hour = 20;
rule3.minute = 3;
rule3.second = 20;
schedule.scheduleJob(rule3, () => logger.warn('매일' + rule3.hour + '시' + rule3.minute + '분' + rule3.second + '초 마다 수행!!', rule3.hour, rule3.minute, rule3.second))

/**  일주일 중 0요일을 기준으로 1번째~5번째 요일까지 (0=sun, 6=sat) */
const rule4 = new schedule.RecurrenceRule();
rule4.dayOfWeek = [0, new schedule.Range(1, 5)];
rule4.second = 45;
schedule.scheduleJob(rule4, () => logger.debug('매주 월~금 매 분 45초마다 실행'));

logger.debug("예약 작업이 설정되었습니다.");