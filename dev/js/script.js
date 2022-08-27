/* Menu Hambúrguer */

let bmenu = document.querySelector(".nav-icon");
let lmenu = document.querySelector(".menu");

bmenu.addEventListener('click', e => {showMenu()});

function showMenu(){
    if(bmenu.className === "nav-icon"){
        bmenu.className += " active";
        lmenu.className += " active";
    }

    else{
        bmenu.className = "nav-icon";
        lmenu.className = "menu";
    }
}

/* Formulário (Página Conta Profissional) */

function nomePreenchido(){
    let text = document.forms["form"]["name"].value, fillmessage = document.querySelector(".fillmessageNome");
    if (text != ""){
        fillmessage.className = "fillmessageNome";
        document.querySelector("#name").className -= " notfill";
        return true;
    }
    else if (text == "") {
        fillmessage.className += " active";
        document.querySelector("#name").className += " notfill";
        document.forms["form"]["name"].focus();
        return false;
    }
}

function cpfPreenchido(){
    let text = document.forms["form"]["cpf"].value, fillmessage = document.querySelector(".fillmessageCPF");
    if (text == "" || text.length !== 11) {
        fillmessage.className += " active";
        document.querySelector("#cpf").className += " notfill";
        document.forms["form"]["cpf"].focus();
        return false;
    }
    else if (text != "") {
        fillmessage.className = "fillmessageCPF";
        document.querySelector("#cpf").className -= " notfill";
        return true;
    }
}

function senhaPreenchido(){
    let text = document.forms["form"]["senha"].value, fillmessage = document.querySelector(".fillmessageSenha");
    if (text == "" || text.length < 8) {
        fillmessage.className += " active";
        document.querySelector("#senha").className += " notfill";
        document.forms["form"]["senha"].focus();
        return false;
    }
    else if (text != "") {
        fillmessage.className = "fillmessageSenha";
        document.querySelector("#senha").className -= " notfill";
        return true;
    }
}

function senhacPreenchido(){
    let text = document.forms["form"]["senhac"].value, fillmessage = document.querySelector(".fillmessageSenhac");
    if (text == "" || text !== document.forms["form"]["senha"].value) {
        fillmessage.className += " active";
        document.querySelector("#senhac").className += " notfill";
        document.forms["form"]["senhac"].focus();
        return false;
    }
    else if (text != "") {
        fillmessage.className = "fillmessageSenhac";
        document.querySelector("#senhac").className -= " notfill";
        return true;
    }
}

let nomeInfo;
let cpfInfo;
let senhaInfo;
function guardarInfo(){
    if(nomePreenchido() && cpfPreenchido() && senhaPreenchido() && senhacPreenchido()){
        nomeInfo = document.forms["form"]["name"].value;
        cpfInfo = document.forms["form"]["cpf"].value;
        senhaInfo = document.forms["form"]["senha"].value;
        /* Resetar formulário */
        document.getElementById("form").reset();
        document.getElementById("botao").setAttribute("onclick", "return profissaoPreenchido(), estadoPreenchido(), expPreenchido(), guardarInfo2();")

        /* Remover Parte 1 */
        /*
        let formc = document.querySelector("#form").querySelectorAll("input"), labelc = document.querySelector(".form").querySelectorAll("label");
        for(c = 0; c < formc.length; ++c){
            document.querySelector(".form").querySelector("input").remove();
        }
        for(c = 0; c < labelc.length; ++c){
            document.querySelector(".form").querySelector("label").remove();
        }
        */

        /* Criar Parte 2 */

        // Nome -> Profissão
        let profissaoLabel = document.getElementById("nameLabel");
        profissaoLabel = profissaoLabel.innerText;
        profissaoLabel = profissaoLabel.replace("Nome:", "Profissão:<span class='required'>");
        nameLabel.innerHTML = profissaoLabel;
        let profissaoInput = document.forms["form"]["name"];
        profissaoInput.setAttribute("type", "text");
        profissaoInput.setAttribute("placeholder", "Digite sua profissão");
        profissaoInput.setAttribute("name", "uname");
        profissaoInput.setAttribute("id", "profissao");
        profissaoInput.setAttribute("class", "");

        // CPF -> Estado
        document.querySelector("#fillmessageCPF").innerHTML = "Por favor, selecione um dos estados onde trabalha!";
        let estadoLabel = document.getElementById("cpfLabel");
        estadoLabel = estadoLabel.innerText;
        estadoLabel = estadoLabel.replace("CPF:", "Estado:<span class='required'>");
        cpfLabel.innerHTML = estadoLabel;

        let fieldset = document.querySelector("#fieldset");
        let estadoDiv1 = document.createElement("div");
        fieldset.appendChild(estadoDiv1);
        estadoDiv1.className = "estadoDiv1";
        let estadoInput1 = document.forms["form"]["cpf"];
        estadoInput1.setAttribute("type", "radio");
        estadoInput1.setAttribute("placeholder", "");
        estadoInput1.setAttribute("name", "estado");
        estadoInput1.setAttribute("id", "estado1");
        estadoInput1.setAttribute("class", "");
        estadoInput1.setAttribute("value", "RS");
        fieldset.insertBefore(estadoDiv1, document.querySelector("#senhaLabel"));
        estadoDiv1.appendChild(estadoInput1);
        let estadoLabel1 = document.createElement("label");
        estadoLabel1.setAttribute("for", "estado1");
        estadoDiv1.appendChild(estadoLabel1);
        let estadoLabel1Txt = document.createTextNode("RS");
        estadoLabel1.appendChild(estadoLabel1Txt);

        let estadoDiv2 = document.createElement("div");
        let estadoInput2 = document.createElement("input");
        estadoInput2.setAttribute("type", "radio");
        estadoInput2.setAttribute("placeholder", "");
        estadoInput2.setAttribute("name", "estado");
        estadoInput2.setAttribute("id", "estado2");
        estadoInput2.setAttribute("class", "");
        estadoInput2.setAttribute("value", "PR");
        fieldset.appendChild(estadoDiv2);
        estadoDiv2.className = "estadoDiv1";
        fieldset.insertBefore(estadoDiv2, document.querySelector("#senhaLabel"));
        estadoDiv2.appendChild(estadoInput2);
        let estadoLabel2 = document.createElement("label");
        estadoLabel2.setAttribute("for", "estado2");
        estadoDiv2.appendChild(estadoLabel2);
        let estadoLabel2Txt = document.createTextNode("PR");
        estadoLabel2.appendChild(estadoLabel2Txt);
        
        let estadoDiv3 = document.createElement("div");
        let estadoInput3 = document.createElement("input");
        estadoInput3.setAttribute("type", "radio");
        estadoInput3.setAttribute("placeholder", "");
        estadoInput3.setAttribute("name", "estado");
        estadoInput3.setAttribute("id", "estado3");
        estadoInput3.setAttribute("class", "");
        estadoInput3.setAttribute("value", "SC");
        fieldset.appendChild(estadoDiv3);
        estadoDiv3.className = "estadoDiv1";
        fieldset.insertBefore(estadoDiv3, document.querySelector("#senhaLabel"));
        estadoDiv3.appendChild(estadoInput3);
        let estadoLabel3 = document.createElement("label");
        estadoLabel3.setAttribute("for", "estado3");
        estadoDiv3.appendChild(estadoLabel3);
        let estadoLabel3Txt = document.createTextNode("SC");
        estadoLabel3.appendChild(estadoLabel3Txt);

        // Senha -> Anos de experiência
        let expLabel = document.getElementById("senhaLabel");
        expLabel = expLabel.innerText;
        expLabel = expLabel.replace("Senha:", "Anos de experiência:<span class='required'>");
        senhaLabel.innerHTML = expLabel;
        let expInput = document.forms["form"]["senha"];
        expInput.setAttribute("type", "number");
        expInput.setAttribute("placeholder", "Digite seu tempo exercendo a profissão");
        expInput.setAttribute("name", "exp");
        expInput.setAttribute("id", "exp");
        expInput.setAttribute("class", "");
        document.querySelector("#fillmessageSenha").innerHTML = "É necessário que o número esteja entre 0 e 50.";

        document.querySelector("#senhacLabel").remove();
        document.querySelector("#senhac").remove();

        return true;
    }
    else{
        return false;
    }
}

function profissaoPreenchido(){
    let text = document.forms["form"]["profissao"].value, fillmessage = document.querySelector(".fillmessageNome");
    if (text != ""){
        fillmessage.className = "fillmessageNome";
        document.querySelector("#profissao").className -= " notfill";
        return true;
    }
    else if (text == "") {
        fillmessage.className += " active";
        document.querySelector("#profissao").className += " notfill";
        document.forms["form"]["profissao"].focus();
        return false;
    }
}

function estadoPreenchido(){
    let opcoes = document.getElementsByName("estado"), fillmessage = document.querySelector(".fillmessageCPF");;
    for(let i = 0; i < opcoes.length; i++){
        if(opcoes[i].checked){
            fillmessage.className += " active";
            return true;
        }
    }
    fillmessage.className += " active";
    return false;
}

function expPreenchido(){
    let text = document.forms["form"]["exp"].value, fillmessage = document.querySelector(".fillmessageSenha");
    if (text == "" || text < 0 || text > 50) {
        fillmessage.className += " active";
        document.querySelector("#exp").className += " notfill";
        document.forms["form"]["exp"].focus();
        return false;
    }
    else if (text != "") {
        fillmessage.className = "fillmessageSenha";
        document.querySelector("#exp").className -= " notfill";
        return true;
    }
}

let profissaoInfo;
let estadoInfo;
let expInfo;
function guardarInfo2(){
    if(profissaoPreenchido() && estadoPreenchido() && expPreenchido()){
        profissaoInfo = document.forms["form"]["profissao"].value;
        estadoInfo = document.forms["form"]["estado1"].value;
        expInfo = document.forms["form"]["exp"].value;
        document.querySelector("#botao").remove();
        document.querySelector(".logredirect").remove();
        document.querySelector(".fillmessageNome").remove();
        document.querySelector(".fillmessageCPF").remove();
        document.querySelector(".fillmessageSenha").remove();
        document.querySelector(".fillmessageSenhac").remove();
        let formc = document.querySelector("#form").querySelectorAll("input"), labelc = document.querySelector(".form").querySelectorAll("label");
            for(let c = 0; c < formc.length; ++c){
                document.querySelector(".form").querySelector("input").remove();
            }
            for(c = 0; c < labelc.length; ++c){
                document.querySelector(".form").querySelector("label").remove();
            }
            for(c = 0; c < 3; ++c){
                document.querySelector(".estadoDiv1").remove();
            }
        let fieldset = document.querySelector("#fieldset");
        let nomeInfoDiv = document.createElement("div");
        nomeInfoDivTxt = document.createTextNode("Nome:");
        nomeInfoDiv.appendChild(nomeInfoDivTxt);
        nomeInfoDiv.setAttribute("style", "justify-self: start !important; grid-column: 1/1 !important");
        fieldset.appendChild(nomeInfoDiv);
        nomeInfoTxt = document.createTextNode(" " + nomeInfo);
        nomeInfoDiv.appendChild(nomeInfoTxt);

        let cpfInfoDiv = document.createElement("div");
        cpfInfoDivTxt = document.createTextNode("CPF:");
        cpfInfoDiv.appendChild(cpfInfoDivTxt);
        cpfInfoDiv.setAttribute("style", "justify-self: start !important; grid-column: 1/1 !important");
        fieldset.appendChild(cpfInfoDiv);
        cpfInfoTxt = document.createTextNode(" " + cpfInfo);
        cpfInfoDiv.appendChild(cpfInfoTxt);

        let senhaInfoDiv = document.createElement("div");
        senhaInfoDivTxt = document.createTextNode("Senha:");
        senhaInfoDiv.appendChild(senhaInfoDivTxt);
        senhaInfoDiv.setAttribute("style", "justify-self: start !important; grid-column: 1/1 !important");
        fieldset.appendChild(senhaInfoDiv);
        senhaInfoTxt = document.createTextNode(" " + senhaInfo);
        senhaInfoDiv.appendChild(senhaInfoTxt);

        let profissaoInfoDiv = document.createElement("div");
        profissaoInfoDivTxt = document.createTextNode("Profissão:");
        profissaoInfoDiv.appendChild(profissaoInfoDivTxt);
        profissaoInfoDiv.setAttribute("style", "justify-self: start !important; grid-column: 1/1 !important");
        fieldset.appendChild(profissaoInfoDiv);
        profissaoInfoTxt = document.createTextNode(" " + profissaoInfo);
        profissaoInfoDiv.appendChild(profissaoInfoTxt);

        let estadoInfoDiv = document.createElement("div");
        estadoInfoDivTxt = document.createTextNode("Estado:");
        estadoInfoDiv.appendChild(estadoInfoDivTxt);
        estadoInfoDiv.setAttribute("style", "justify-self: start !important; grid-column: 1/1 !important");
        fieldset.appendChild(estadoInfoDiv);
        estadoInfoTxt = document.createTextNode(" " + estadoInfo);
        estadoInfoDiv.appendChild(estadoInfoTxt);

        let expInfoDiv = document.createElement("div");
        expInfoDivTxt = document.createTextNode("Anos de experiência:");
        expInfoDiv.appendChild(expInfoDivTxt);
        expInfoDiv.setAttribute("style", "justify-self: start !important; grid-column: 1/1 !important");
        fieldset.appendChild(expInfoDiv);
        expInfoTxt = document.createTextNode(" " + expInfo);
        expInfoDiv.appendChild(expInfoTxt);
    }
}
