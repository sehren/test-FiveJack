function solution(relation) {
    // check each column is there any unique key
    var answer = 0
    var total = []
    var length = relation[0].length;
    for (let col = 0; col < length-1; col++) {
        const row = relation.map(rel => rel[col]);
        if(new Set(row).size == row.length){
            total.push(col);
            answer++;
        }
    }
    for (let col = 0; col < length - 1; col++) {
        for (let colNext = 0; colNext < length - 1; colNext++) {
            const isCurrentCandidate = total.findIndex(el => el === col) > -1;
            const isNextCandidate = total.findIndex(el => el === colNext) > -1;
            if (!isCurrentCandidate && !isNextCandidate && col !== colNext) {
                const oneRows = relation.map(rel => `${rel[col]} ${rel[colNext]}`);
                if(new Set(oneRows).size == oneRows.length){
                    total.push(col);
                    total.push(colNext);
                    answer++;
                }
            }
        }
    }
    return answer
}
module.exports = solution;