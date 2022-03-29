const points = [82, 91, 54, 62, 88, 90];
const names = [ '재석', '민영', '종민', '광수', '승기', '세정'];

for (let i=0; i < points.length -1; i++) {
    for (let j = i+ 1; j<points.length; j++) {
        if (points[i] < points[j]) {
            tmp = points[i];
            points[i] = points[j];
            points[j] = tmp;

            tmp = names[i];
            names[i] = names[j];
            names[j] = tmp;
        

        }
    }
}

console.log("출력결과 : " + names);






