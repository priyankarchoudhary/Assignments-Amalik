var StatusENUMS  = {
    ACTIVE : "ACTIVE",
    COMPLETE: "COMPLETE",
    DELETED: "DELETED"
}
var todos = {
    1 : {title: "Learn Javascript", status: StatusENUMS.ACTIVE},
    2 : {title: "Git Tutorial ", status: StatusENUMS.ACTIVE},
    3 : {title: "Git interaction", status: StatusENUMS.ACTIVE},
    4 : {title: "java interaction", status: StatusENUMS.DELETED},
    5 : {title: "dotnet interaction", status: StatusENUMS.DELETED},
    6 : {title: "nodejs interaction", status: StatusENUMS.COMPLETE},
    7 : {title: "javascript interaction", status: StatusENUMS.COMPLETE},
}

var nex_todo_id = 8;

module.exports = {
    StatusENUMS : StatusENUMS,
    todos : todos,
    next_todo_id : nex_todo_id
}