var deleteButton=document.getElementById('delete-button');
deleteButton.addEventListener('click',function(e){
    e.preventDefault(); 
    var selectedTasks=document.querySelectorAll('.c-box:checked');
    var selectedTasksId=[];
    for(let i=0;i<selectedTasks.length;i++){
        selectedTasksId[i]=selectedTasks[i].id;
    }
    $.ajax({
        url: '/delete-task',
        method: 'POST',
        data: {selectedTasksId},
        success: function(data, textStatus, jqXHR){
            console.log('hjbfdv');
            alert("Success: " + response); 
            location.reload();
            //window.location.reload();
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log('errrr');
            alert("Error"); 
        }
    });
    location.reload();  
        /*
        success:function(data){
            console.log('successs');
            console.log(window.location="/");
        },
        error:function(err){
            console.log(err);
        }
       });*/

       //console.log('im here');
});