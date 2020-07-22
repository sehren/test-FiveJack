function solution(N, users) {
    if (N < 1 || N > 500) {
        throw new Error('The total stages should between 1 and 500');
    }
    if (users.length < 1 || users.length > 200000) {
        throw new Error('The total users should between 1 and 200000');
    }
    var stage = []
    var lengthRate = users.length;
    for(var i=1;i<=N;i++){
        var total = 0;
        for(var j=0;j<users.length;j++){
            if(users[j]==i){
                total++;
            }
        }
        stage.push({rate : total/lengthRate, stage : i})
        lengthRate-=total;
    }
    stage.sort(function (a, b) {
        return b.rate - a.rate;
    });
    var answer = [];
    stage.forEach(i=>{
        answer.push(i.stage)
    })
    return answer;
}
module.exports = solution;