$(document).ready(function () {
       $('#home').click(function () { 
              
              $('body').load("index.html", function (response, status, request) {
                     alert(response);l
                     
              });
              
       });
       $('#o_nas').click(function () { 
              $('#removable').remove();
              const createDiv = document.createElement('div');
              $(createDiv).attr('id','removable');
              $(createDiv).appendTo('#main_box');

       });
});
