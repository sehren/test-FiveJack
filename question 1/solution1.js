function solution(record) {
    var room = []
    record.forEach(i=>{
        var user = i.split(" ");
        if(user[0] === "Enter"){
            var isExist = false;
            room.forEach((j,ind)=>{
                if(j.uid == user[1]){
                    isExist = true
                }
            })
            if(!isExist){
                room.push({uid : user[1], name : user[2], status : "Enter"})
            }
            else if(isExist){
                room.forEach(j=>{
                    j.name = j.uid == user[1] ? user[2] : j.name; 
                })
                room.push({uid : user[1], name : user[2], status : "Enter"})
            }
        }
        else if(user[0] === "Leave"){
            var isExist = false;
            index = 0;
            room.forEach((j, ind)=>{
                if(j.uid == user[1]){
                    isExist = true;
                    index = ind
                }
            })
            if(isExist){
                room.push({uid : user[1], name : room[index].name, status : "Leave"})
            }
        }
        else if(user[0] === "Change"){
            var isExist = false;
            index = 0;
            room.forEach((j, ind)=>{
                if(j.uid == user[1]){
                    isExist = true;
                    index = ind
                }
            })
            if(isExist){
                room[index].name = user[2]
            }
        }
    })
    var answer = [];
    room.forEach(i=>{
        answer.push(i.name + (i.status == "Enter" ? " came in." : " has left."))
    })
    return answer;
}
module.exports = solution;