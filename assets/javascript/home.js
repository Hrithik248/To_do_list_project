//script file connected to home.ejs which adds a custom event listener to delete button
//on clicking delete task button all the id of selected task are fetched and sent to delete task controller using ajax post request
var deleteButton=document.getElementById('delete-button');
deleteButton.addEventListener('click',function(e){
    e.preventDefault(); 
    var selectedTasks=document.querySelectorAll('.c-box:checked');
    var selectedTasksId=[];
    for(let i=0;i<selectedTasks.length;i++){
        selectedTasksId[i]=selectedTasks[i].id;
    }
    //ajax post request sending id of selected tasks
    $.ajax({
        url: '/delete-task',
        method: 'POST',
        data: {selectedTasksId},
        success: function(){
            //reloading the page home page after success of delete request
            location.reload(); 
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert("Error",errorThrown); 
        }
    })
});