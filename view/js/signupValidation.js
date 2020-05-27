const _DRIVING_LICENSE_LETTERS = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];


$( document ).ready(function() {


//carnet-->
let inputLetter = $("input[name='drivingLicenseLetter']");
let divLetter = inputLetter.parent();
divLetter.hide();

$("input[name='drivingLicenseNumber']").keyup(function() {
    if ($(this).val() !== "") {
        divLetter.show();
        inputLetter.val(_DRIVING_LICENSE_LETTERS[$(this).val() % 23]);
        $(this).parent().addClass("w-75");
    } else {
        if (inputLetter.val() !== "") {
            inputLetter.val("");

            if (divLetter.is(':visible')) {
                divLetter.hide();
                $(this).parent().removeClass("w-75");
            }
        }
    }
});



//carnet-->




    $( "#signup" ).click(function() {
        var user=$('input[name=CorreuElectronic]').val(), pass=$('input[name=Contrasenya]').val(), carnet=$('#inputDrivingLicenseNumber').val(), model=$('select[name=MarcaYModelDeCotxe]').val();
        var success=0;
        //test carnet


            if ($("input[name='drivingLicenseNumber']").val() === "" && ($("input[type='hidden']#dialogAccepted").val() === "false")) {
                $("dialog")[0].showModal();
            
            }
        
       
     
       
       $("dialog button.close").click(function() {
           $("input[type='hidden']#dialogAccepted").val("true");
       
       })
        //test carnet
        if (user=="" || user==undefined || user=="NULL"){            
           $('#dialag').html(dialag('Error!', "Si us plau, posa un camp de correu electrònic vàlid!", 1));
           $('.errosSignup').show();
           $('.errosSignup').css('z-index', '1');
        }else{success++;}
        if (pass=="" || pass==undefined || pass=="NULL") {
            $('#dialag').html(dialag('Error!', "Si us plau, posa un camp de contrasenya vàlid!", 1));
            $('.errosSignup').show();
            $('.errosSignup').css('z-index', '1');           
        }else{success++;}
        if(model=="" || model==undefined || model=="NULL"){
            $('#dialag').html(dialag('Error!', "Si us plau, selecciona un marca i model de cotxe vàlid!", 1));
            $('.errosSignup').show();
            $('.errosSignup').css('z-index', '1');   
        }else{success++;}

        if(success==3){
            var _data = {
                "CorreuElectronic": user,
                "Contrasenya" : pass,
                "carnet" : carnet,
                "MarcaYModelDeCotxe" : model  
                
            };

            $.ajax({    
                data : _data,
                url : "/singup/newuser",
                type: 'post',
                success : function (success) {
                    if (success) {
                   
                        $('#dialag').html(dialag('Ara ja formes part del g3d2!', "Usuari enregistrat correctament!", 2));
                        $('.errosSignup').show();
                        $('.errosSignup').css('z-index', '1');   
          
                    }
               
                }

            });

           
        }




      });
});


function dialag(titol, mistage, n) {
if (n==1) {
    return  '<html>'+
    '<head>'+
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.5.1/dialog-polyfill.min.css" integrity="sha256-qVjBFbunjrWQ4IikV5dkK1ziW9XKskisX1rUbCIJEhk=" crossorigin="anonymous" />'+
    '</head>'+
    '<body>'+
 
 '<dialog class="mdl-dialog errosSignup">'+

 '<h4 class="mdl-dialog__title">'+titol+'</h4>'+
 '<div class="mdl-dialog__content">'+
 '<p>'+mistage+'</p>'+
 '<div class="mdl-dialog__actions">'+
 '<button type="button" class="mdl-button" onclick="closedialog()">Acceptar</button>'+
 '</div>'+
 '</dialog>'+    
 '<script src="https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.5.1/dialog-polyfill.min.js" integrity="sha256-B4Jb9j0PE2EzFJ6NaPkoJXDcQtQYR0Zd3DJKeYLifbg=" crossorigin="anonymous"></script>'+
 '</body>'+
 '</html>';
}else if(n==2){
    return  '<html>'+
    '<head>'+
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.5.1/dialog-polyfill.min.css" integrity="sha256-qVjBFbunjrWQ4IikV5dkK1ziW9XKskisX1rUbCIJEhk=" crossorigin="anonymous" />'+
    '</head>'+
    '<body>'+
 
 '<dialog class="mdl-dialog errosSignup">'+

 '<h4 class="mdl-dialog__title">'+titol+'</h4>'+
 '<div class="mdl-dialog__content">'+
 '<p>'+mistage+'</p>'+
 '<div class="mdl-dialog__actions">'+
 '<button type="button" class="mdl-button" onclick="urlroute()">Acceptar</button>'+
 '</div>'+
 '</dialog>'+    
 '<script src="https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.5.1/dialog-polyfill.min.js" integrity="sha256-B4Jb9j0PE2EzFJ6NaPkoJXDcQtQYR0Zd3DJKeYLifbg=" crossorigin="anonymous"></script>'+
 '</body>'+
 '</html>';
}

}
function closedialog() {
    $("dialog").hide();
}

function urlroute(){
    window.location = "/route";
}