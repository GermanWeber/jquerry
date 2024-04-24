$(document).ready(function(){

    let num1 = 0;
    let num2 = 0;
    let resultado = 0;



    $("#resultado").css("color","red");
    $("#resultado").hide();

    $("#h1").click(function(){
        $(this).text("wena wena")
    });

    $("#btnSumar").click(function(){

        $("#error1").text("");
        $("#error2").text("");

        if($("#numero1").val() === ""){
            
            $("#error1").text("debe agregar el primer numero")
            $("#error1").css("color","red");
            return;
        }

        if($("#numero2").val() === ""){
            
            $("#error2").text("debe agregar el primer numero")
            $("#error2").css("color","red");
            return;
        }
        
        num1 = parseInt($("#numero1").val());
        num2 = parseInt($("#numero2").val());

        resultado = num1 + num2;

        $("#resultado").show();
        $("#resultado").text(resultado);
        $("#resultado").css("color","green");


    });


    $("#btnRestar").click(function(){

        $("#error1").text("");
        $("#error2").text("");

        if($("#numero1").val() === ""){
            
            $("#error1").text("debe agregar el primer numero")
            $("#error1").css("color","red");
            return;
        }

        if($("#numero2").val() === ""){
            
            $("#error2").text("debe agregar el primer numero")
            $("#error2").css("color","red");
            return;
        }
        
        num1 = parseInt($("#numero1").val());
        num2 = parseInt($("#numero2").val());

        resultado = num1 - num2;

        $("#resultado").show();
        $("#resultado").text(resultado);

    });

    $("#btnMultiplicar").click(function(){

        $("#error1").text("");
        $("#error2").text("");

        if($("#numero1").val() === ""){
            
            $("#error1").text("debe agregar el primer numero")
            $("#error1").css("color","red");
            return;
        }

        if($("#numero2").val() === ""){
            
            $("#error2").text("debe agregar el primer numero")
            $("#error2").css("color","red");
            return;
        }
        
        num1 = parseInt($("#numero1").val());
        num2 = parseInt($("#numero2").val());

        resultado = num1 * num2;

        $("#resultado").show();
        $("#resultado").text(resultado);
        

    });

    $("#btnDividir").click(function(){

        $("#error1").text("");
        $("#error2").text("");

        if($("#numero1").val() === ""){
            
            $("#error1").text("debe agregar el primer numero")
            $("#error1").css("color","red");
            return;
        }

        if($("#numero2").val() === ""){
            
            $("#error2").text("debe agregar el primer numero")
            $("#error2").css("color","red");
            return;
        }

        // if($("#numero1").val() !== "0" && $("#numero2").val() !== "0"){

        //     num1 = parseInt($("#numero1").val());
        //     num2 = parseInt($("#numero2").val());

        //     resultado = num1 / num2;

        //     $("#resultado").show();
        //     $("#resultado").text(resultado);      
        // }else{
        //     $("#error1").text("no se puede dividir por 0")
        //     $("#error1").css("color","red");
        //     $("#error2").text("no se puede dividir por 0")
        //     $("#error2").css("color","red");
        //     $("#numero1").text("");
        //     $("#numero2").text("");
        // };

        if($("#numero1").val() !== "0"){

        } else{
            $("#error1").text("no se puede dividir por 0")
            $("#error1").css("color","red");
            return;
        }
        if($("#numero2").val() !== "0"){

            num1 = parseInt($("#numero1").val());
            num2 = parseInt($("#numero2").val());

            resultado = num1 / num2;

            $("#resultado").show();
            $("#resultado").text(resultado);

        }else{
            $("#error2").text("no se puede dividir por 0")
            $("#error2").css("color","red");
            return;
        }
        
        

    });

});