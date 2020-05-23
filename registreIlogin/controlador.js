function AfegirUsuari() {

var CorreuElectronic = $("#CorreuElectronic").val();

var Contrasenya = $("#Contrasenya").val();

var CarnetdeConduir = $("#CarnetdeConduir").val();

var MarcaYModelDeCotxe = $("#MarcaYModelDeCotxe").val();

var parametros = {
              "fun" : 'afegirUsuari',
              "CorreuElectronic" : CorreuElectronic,
              "Contrasenya" : Contrasenya,
              "CarnetdeConduir" : CarnetdeConduir,
              "MarcaYModelDeCotxe" : MarcaYModelDeCotxe
      };


      $.ajax({
              data:  parametros, //datos que se envian a traves de ajax
              url:   'controlador.php', //archivo que recibe la peticion
              type:  'post', //método de envio
              success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
              alert(response);
              $("#CorreuElectronic").val();
              $("#Contrasenya").val('');
              $("#CarnetdeConduir").val('');
              $("#MarcaYModelDeCotxe").val('');
              }

      });

console.log('CorreuElectronic ->  '+CorreuElectronic);
console.log('Contrasenya ->  '+Contrasenya);
console.log('CarnetdeConduir ->  '+CarnetdeConduir);
console.log('MarcaYModelDeCotxe ->  '+MarcaYModelDeCotxe);

}

function login(){

 var CorreuElectronic = $('#CorreuElectronic').val();
 var Contrasenya = $('#Contrasenya').val();


 var parametros = {
   'fun' : 'login',
   'CorreuElectronic' : CorreuElectronic,
   'Contrasenya' : Contrasenya

 };

 $.ajax({
          data:  parametros, //datos que se envian a traves de ajax
          url:   'controlador.php', //archivo que recibe la peticion
          type:  'post', //método de envio
           // beforeSend: function () {
           //
           // },

          success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
          if (response=='OKAY'){
              location.href = "https://app3arnauivan.000webhostapp.com/";

          }else{
            alert(response);
            console.log(response);
          }

          $('#CorreuElectronic').val('');
          $('#Contrasenya').val('');
          }

  });

}
