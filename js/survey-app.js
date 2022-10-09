let contenedor = document.getElementById("contenedor");
let contenedor_boton_1 = document.getElementById("contenedor_boton_1");
let contenedor_boton_2 = document.getElementById("contenedor_boton_2");


let nombre_cliente="";
let correo_cliente ="";
let nombre_mesero ="";
let preg_2 = ["","","","",""];
let preg_3 = ["","","","",""];
let preg_4 = ["","","","",""];
let preg_5 = ["","","","",""];
let pregunta_actual =0;


function change_function_btn_1(funcion,txt){
    if(txt){
        contenedor_boton_1.innerHTML = 
    ` <button class="btn btn-outline-dark" onclick="`+funcion+`()">`+txt+`</button>`;

    }else{
        contenedor_boton_1.innerHTML = 
    ` <button class="btn btn-outline-dark" onclick="`+funcion+`()">Next</button>`;
    }
}

function change_function_btn_2(funcion){
    contenedor_boton_2.innerHTML = 
    `<button class="btn btn-outline-dark" onclick="`+funcion+`()">Back</button>`;
}

function start(){
    contenedor.innerHTML = 
        `
        <div class="row">
            <div class="col text-center mt-4">
                <i class="fa-solid fa-handshake fa-2x"></i>
            </div>
        </div>
        
        
        <div class="row">
            <div class="col text-center">
                <h3 class="h3 fw-light header mt-4">First, let us know you.</h3>
            </div>
        </div>

        <div class="row mt-2">
            <div class="col text-center">
                <input type="text" id="customer_name" class="form-control rounded border-dark" placeholder="Name" value="`+nombre_cliente+`">
                
            </div>
        </div>

        <div class="row mt-2">
            <div class="col text-center">
                <input type="email" id="customer_email" class="form-control rounded border-dark" placeholder="email@something.com" value="`+correo_cliente+`">
                
            </div>
        </div>`;
    

            change_function_btn_1("quest_one");
            contenedor_boton_2.innerHTML ="";
            pregunta_actual =0;
}

function quest_one(){
    if(pregunta_actual==0){
        nombre_cliente = document.getElementById("customer_name").value;
        correo_cliente = document.getElementById("customer_email").value;

        verify_name_email(nombre_cliente,correo_cliente);
    }
    

    

    contenedor.innerHTML = 
        `
        <div class="row">
                <div class="col text-center mt-4">
                <i class="fa-solid fa-person-circle-question fa-2x"></i>
                </div>
            </div>
        
        <div class="row">
            <div class="col text-center">
                <h3 class="h3 fw-light header mt-4">What is the name of your server</h3>
            </div>
        </div>

        <div class="row mt-2">
            <div class="col text-center">
                <input type="text" id="server_name" class="form-control rounded border-dark" placeholder="Server Name" value="`+nombre_mesero+`">
                    
            </div>
        </div>

        <div class="row mt-3">
                <div class="col mt-5">
                    <p class="text-danger visually-hidden" id="mensaje_error">*Campos faltantes o datos incorrectos.</p>
                </div>
        </div>


`;
    


    change_function_btn_1("quest_two");
    change_function_btn_2("start");
    pregunta_actual =1;

    
}

function quest_two(){

    if(pregunta_actual==1){
        nombre_mesero = document.getElementById("server_name").value;
        verify_server_name(nombre_mesero);
    }
    contenedor.innerHTML = 
    `            
    <div class="row">
                <div class="col text-center mt-4">
                <i class="fa-solid fa-star fa-2x"></i>
                </div>
            </div>
    
    
    <div class="row">
    <div class="col text-center">
        <h3 class="fw-light header mt-4">How do you rate (Server) service ?</h3>
    </div>
</div>

<div class="row mt-3">
    <div class="col text-center">
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option1" `+preg_2[0]+`> 1
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option2" `+preg_2[1]+`> 2
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option3" `+preg_2[2]+`> 3
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option4" `+preg_2[3]+`> 4
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option5" `+preg_2[4]+`> 5
            </label>
        </div>
    </div>
</div>

<div class="row mt-3">
                <div class="col mt-5">
                    <p class="text-danger visually-hidden" id="mensaje_error">*Campos faltantes o datos incorrectos.</p>
                </div>
        </div>
`;

    change_function_btn_1("quest_three");
    change_function_btn_2("quest_one");
    pregunta_actual = 2;
    
}

function quest_three(){
    if(pregunta_actual==2){
        document.getElementById("option1").checked ? preg_2[0] = "checked" : preg_2[0] = ""
        document.getElementById("option2").checked ? preg_2[1] = "checked" : preg_2[1] = ""
        document.getElementById("option3").checked ? preg_2[2] = "checked" : preg_2[2] = ""
        document.getElementById("option4").checked ? preg_2[3] = "checked" : preg_2[3] = ""
        document.getElementById("option5").checked ? preg_2[4] = "checked" : preg_2[4] = ""

        verify_rate(preg_2);
    }
    contenedor.innerHTML = 
    `            
    <div class="row">
                <div class="col text-center mt-4">
                <i class="fa-solid fa-stopwatch fa-2x"></i>
                </div>
            </div>
    
    
    
    <div class="row">
    <div class="col text-center">
        <h3 class="fw-light header mt-4">How do you rate the speed of our service ?</h3>
    </div>
</div>

<div class="row mt-3">
    <div class="col text-center">
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option1" `+preg_3[0]+`> 1
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option2" `+preg_3[1]+`> 2
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option3" `+preg_3[2]+`> 3
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option4" `+preg_3[3]+`> 4
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option5" `+preg_3[4]+`> 5
            </label>
        </div>
    </div>
</div>
<div class="row mt-3">
                <div class="col mt-5">
                    <p class="text-danger visually-hidden" id="mensaje_error">*Campos faltantes o datos incorrectos.</p>
                </div>
        </div>
`;

    change_function_btn_1("quest_four");
    change_function_btn_2("quest_two");
    pregunta_actual = 3;
    
}

function quest_four(){
    if(pregunta_actual==3){
        document.getElementById("option1").checked ? preg_3[0] = "checked" : preg_3[0] = ""
        document.getElementById("option3").checked ? preg_3[2] = "checked" : preg_3[2] = ""
        document.getElementById("option2").checked ? preg_3[1] = "checked" : preg_3[1] = ""
        document.getElementById("option4").checked ? preg_3[3] = "checked" : preg_3[3] = ""
        document.getElementById("option5").checked ? preg_3[4] = "checked" : preg_3[4] = ""

        verify_rate(preg_3);
    }
    contenedor.innerHTML = 
    `            
    <div class="row">
                <div class="col text-center mt-4">
                <i class="fa-solid fa-drumstick-bite fa-2x"></i>
                </div>
            </div>
    
    
    <div class="row">
    <div class="col text-center">
        <h3 class="fw-light header mt-4">How do you rate the taste of our food ?</h3>
    </div>
</div>

<div class="row mt-3">
    <div class="col text-center">
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option1" `+preg_4[0]+`> 1
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option2" `+preg_4[1]+`> 2
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option3" `+preg_4[2]+`> 3
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option4" `+preg_4[3]+`> 4
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option5" `+preg_4[4]+`> 5
            </label>
        </div>
    </div>
</div> 

<div class="row mt-3">
                <div class="col mt-5">
                    <p class="text-danger visually-hidden" id="mensaje_error">*Campos faltantes o datos incorrectos.</p>
                </div>
        </div>
`;

    change_function_btn_1("quest_five");
    change_function_btn_2("quest_three");
    pregunta_actual = 4;
    
}

function quest_five(){
    if(pregunta_actual==4){
        document.getElementById("option1").checked ? preg_4[0] = "checked" : preg_4[0] = ""
        document.getElementById("option3").checked ? preg_4[2] = "checked" : preg_4[2] = ""
        document.getElementById("option2").checked ? preg_4[1] = "checked" : preg_4[1] = ""
        document.getElementById("option4").checked ? preg_4[3] = "checked" : preg_4[3] = ""
        document.getElementById("option5").checked ? preg_4[4] = "checked" : preg_4[4] = ""

        verify_rate(preg_4);
    }
    contenedor.innerHTML = 
    `            
    <div class="row">
                <div class="col text-center mt-4">
                <i class="fa-solid fa-glass-water fa-2x"></i>
                </div>
            </div>
    
    <div class="row">
    <div class="col text-center">
        <h3 class="fw-light header mt-4">How do you rate our drinks ?</h3>
    </div>
</div>

<div class="row mt-3">
    <div class="col text-center">
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option1" `+preg_5[0]+`> 1
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option2" `+preg_5[1]+` > 2
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option3" `+preg_5[2]+`> 3
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option4" `+preg_5[3]+`> 4
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option5" `+preg_5[4]+`> 5
            </label>
        </div>
    </div>
</div>

<div class="row mt-3">
                <div class="col mt-5">
                    <p class="text-danger visually-hidden" id="mensaje_error">*Campos faltantes o datos incorrectos.</p>
                </div>
        </div>

`;

    change_function_btn_1("finish","Finish");
    change_function_btn_2("quest_four");
    pregunta_actual = 5;
    
}

function finish(){
    if(pregunta_actual==5){
        document.getElementById("option1").checked ? preg_5[0] = "checked" : preg_5[0] = ""
        document.getElementById("option3").checked ? preg_5[2] = "checked" : preg_5[2] = ""
        document.getElementById("option2").checked ? preg_5[1] = "checked" : preg_5[1] = ""
        document.getElementById("option4").checked ? preg_5[3] = "checked" : preg_5[3] = ""
        document.getElementById("option5").checked ? preg_5[4] = "checked" : preg_5[4] = ""

        verify_rate(preg_5);
    }
    contenedor.innerHTML = 
    `<div class="row">
    <div class="col text-center">
        <h3 class="fw-light header mt-4">¡ Well Done !</h3>
        <p>You have helped us to improve the quality of our service. We hope to see you again soon.</p>
        <i class="fa-solid fa-check fa-6x"></i>
    </div>
</div>`;

    contenedor_boton_1.innerHTML = "";
    contenedor_boton_2.innerHTML = "";
    pregunta_actual = 6;
}

function verify_name_email(nombre,correo){
    let error = document.getElementById("mensaje_error");
    var hasNumber = /\d/;
    if(nombre === "" || correo === "" || hasNumber.test(nombre)){
        error.classList.remove("visually-hidden");
        error.innerText = "*Nombre/Correo invalido."
        throw Error("Nombre o correo mal");
    }else{
        error.classList.add("visually-hidden");
    }
    
}

function verify_server_name(nombre){
    
    let error = document.getElementById("mensaje_error");
    var hasNumber = /\d/;
    if(nombre === "" || hasNumber.test(nombre)){
        

        error.classList.remove("visually-hidden");
        error.innerText ="*Nombre faltante o invalido."
        throw Error("nombre mesero mal");
    }else{
        error.classList.add("visually-hidden");
    }
    
}

function verify_rate(arreglo) {
    let error = document.getElementById("mensaje_error");
    let vacio = true;
    for (const p of arreglo) {
        if (p != "") {
            vacio = false;
        }
    }

    if (vacio) {
        error.classList.remove("visually-hidden");
        error.innerText = "*Selecciona una opcion."
        throw Error("datos faltantes");
    }else{
        error.classList.add("visually-hidden");
    }
}




