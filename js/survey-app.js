let contenedor = document.getElementById("contenedor");
let contenedor_boton_1 = document.getElementById("contenedor_boton_1");
let contenedor_boton_2 = document.getElementById("contenedor_boton_2");

let customer_name_element = document.getElementById("customer_name");
let customer_name_value = "";

let customer_email_element = document.getElementById("customer_email");
let customer_email_value = "";

let server_name_element;
let server_name_value = "";

let rates = {};

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
    if(customer_name_value!="" && customer_email_value !=""){
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
                    <input type="text" id="customer_name" class="form-control rounded border-dark" placeholder="Name" value="`+customer_name_value+`">
                    
                </div>
            </div>
    
            <div class="row mt-2">
                <div class="col text-center">
                    <input type="email" id="customer_email" class="form-control rounded border-dark" placeholder="email@something.com" value="`+customer_email_value+`">
                    
                </div>
            </div>`;
    }else{
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
                <input type="text" id="customer_name" class="form-control rounded border-dark" placeholder="Name">
                
            </div>
        </div>

        <div class="row mt-2">
            <div class="col text-center">
                <input type="email" id="customer_email" class="form-control rounded border-dark" placeholder="email@something.com">
                
            </div>
        </div>`;
    }
    

            change_function_btn_1("quest_one");
            contenedor_boton_2.innerHTML ="";
}

function quest_one(){
    get_value_start();
    if(server_name_value !=""){
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
                <input type="text" id="server_name" class="form-control rounded border-dark" placeholder="Server Name" value="`+server_name_value+`">
                    
            </div>
        </div>


`;
    }else{
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
                <input type="text" id="server_name" class="form-control rounded border-dark" placeholder="Server Name">
                    
            </div>
        </div>


`;
    }
    


    change_function_btn_1("quest_two");
    change_function_btn_2("start");

    
}

function quest_two(){
    get_value_quest_one();
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
                <input type="radio" name="radio_group" id="option1"> 1
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option2" > 2
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option3"> 3
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option4"> 4
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option5"> 5
            </label>
        </div>
    </div>
</div>`;

    change_function_btn_1("quest_three");
    change_function_btn_2("quest_one");
    
}

function quest_three(){
    get_value_rate();
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
                <input type="radio" name="radio_group" id="option1" class="opciones"> 1
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option2" class="opciones"> 2
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option3" class="opciones"> 3
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option4" class="opciones"> 4
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option5" class="opciones"> 5
            </label>
        </div>
    </div>
</div>`;

    change_function_btn_1("quest_four");
    change_function_btn_2("quest_two");
    
}

function quest_four(){
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
                <input type="radio" name="radio_group" id="option1" class="opciones"> 1
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option2" class="opciones"> 2
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option3" class="opciones"> 3
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option4" class="opciones"> 4
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option5" class="opciones"> 5
            </label>
        </div>
    </div>
</div>`;

    change_function_btn_1("quest_five");
    change_function_btn_2("quest_three");
    
}

function quest_five(){
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
                <input type="radio" name="radio_group"name="radio_group" id="option1" class="opciones"> 1
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option2" class="opciones" > 2
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option3" class="opciones"> 3
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option4" class="opciones"> 4
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" name="radio_group" id="option5" class="opciones"> 5
            </label>
        </div>
    </div>
</div>`;

    change_function_btn_1("finish","Finish");
    change_function_btn_2("quest_four");
    
}

function finish(){
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
}

function get_value_start(){
    
    customer_name_value = customer_name_element.value;
    customer_email_value = customer_email_element.value;
    
}

function get_value_quest_one(){
    server_name_element = document.getElementById("server_name");
    server_name_value = server_name_element.value;
}

function get_value_rate(){
    let radios = document.getElementsByClassName("opciones");
    for(const radio of radios){
        if(radio.active){
            console.log(radio.id+" es activo");
        }
    }
}



