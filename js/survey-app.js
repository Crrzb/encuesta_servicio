let contenedor = document.getElementById("contenedor");
let contenedor_boton_1 = document.getElementById("contenedor_boton_1");
let contenedor_boton_2 = document.getElementById("contenedor_boton_2");

function change_function_btn_1(funcion){
    contenedor_boton_1.innerHTML = 
    ` <button class="btn btn-outline-dark" onclick="`+funcion+`()">Next</button>`;
}

function change_function_btn_2(funcion){
    contenedor_boton_2.innerHTML = 
    ` <button class="btn btn-outline-dark" onclick="`+funcion+`()">Back</button>`;
}

function start(){
    contenedor.innerHTML = `<div class="row">
                <div class="col">
                    <h3 class="h3 fw-light header mt-4">First, let us know you.</h3>
                </div>
            </div>

            <div class="row mt-2">
                <div class="col text-center">
                    <input type="text" id="name" class="form-control rounded" placeholder="Name">
                    
                </div>
            </div>
    
            <div class="row mt-2">
                <div class="col text-center">
                    <input type="email" id="email" class="form-control rounded" placeholder="email@something.com">
                    
                </div>
            </div>`;

            change_function_btn_1("quest_one");
            contenedor_boton_2.innerHTML ="";
}

function quest_one(){
    contenedor.innerHTML = 
        `<div class="row">
            <div class="col">
                <h3 class="h3 fw-light header mt-4">What is the name of our server</h3>
            </div>
        </div>

        <div class="row mt-2">
            <div class="col text-center">
                <input type="text" id="server_name" class="form-control rounded" placeholder="Server Name">
                    
            </div>
        </div>


`;


    change_function_btn_1("quest_two");
    change_function_btn_2("start")
}

function quest_two(){
    
}

