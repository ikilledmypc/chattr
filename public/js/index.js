/**
 * Created by tim on 4-7-15.
 */
$(document).ready(function(){
    var messagebox = $("#chatbox");

     $("#submitButton").click(function(){
         $.ajax({
             type: "POST",
             url: "/",
             data: {
                 message : $("#messageBox").val()
             },
             success :function (res){
               //  console.log("message sent")
             }
         });
     });


    io.on('connection', function(socket){
        socket.on('initial messages',function (msg){
           // console.log('message: ' + msg);
        });
    });
    io.on('chat message', function(msg){
        console.log(messagebox.scrollHeight);
        $('#chatboxList').append("<li class='list-group-item'>"+msg+"</li>");
        messagebox[0].scrollTop = messagebox[0].scrollHeight;
    });

});