var deleteButton=document.getElementById('delete-button');
deleteButton.addEventListener('click',function(){
    var selectedTasks=document.querySelectorAll('.c-box:checked');
    var selectedTasksId=[];
    for(let i=0;i<selectedTasks.length;i++){
        selectedTasksId[i]=selectedTasks[i].id;
    }
    $.ajax({
        url: 'delete-task',
        method: 'POST',
        data: {selectedTasksId},
       });
});