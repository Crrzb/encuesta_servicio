let contenedor = document.getElementById("contenedor");
let contenedor_boton_1 = document.getElementById("contenedor_boton_1");
let contenedor_boton_2 = document.getElementById("contenedor_boton_2");

let customer_name,customer_email,server_name,r1,r2,r3,r4;

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
                    <input type="text" id="name" class="form-control rounded border-dark" placeholder="Name">
                    
                </div>
            </div>
    
            <div class="row mt-2">
                <div class="col text-center">
                    <input type="email" id="email" class="form-control rounded border-dark" placeholder="email@something.com">
                    
                </div>
            </div>`;

            change_function_btn_1("quest_one");
            contenedor_boton_2.innerHTML ="";
}

function quest_one(){
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


    change_function_btn_1("quest_two");
    change_function_btn_2("start");
}

function quest_two(){
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
                <input type="radio" id="option1"> 1
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" id="option2" > 2
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" id="option3"> 3
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" id="option4"> 4
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" id="option5"> 5
            </label>
        </div>
    </div>
</div>`;

    change_function_btn_1("quest_three");
    change_function_btn_2("quest_one");
    
}

function quest_three(){
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
                <input type="radio" id="option1"> 1
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" id="option2" > 2
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" id="option3"> 3
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" id="option4"> 4
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" id="option5"> 5
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
                <input type="radio" id="option1"> 1
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" id="option2" > 2
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" id="option3"> 3
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" id="option4"> 4
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" id="option5"> 5
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
                <input type="radio" id="option1"> 1
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" id="option2" > 2
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" id="option3"> 3
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" id="option4"> 4
            </label>
            <label class="btn rounded-pill btn-outline-dark mx-2">
                <input type="radio" id="option5"> 5
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



