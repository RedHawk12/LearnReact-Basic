const submit = document.getElementById("submeter");

var counter = 0;

submit.addEventListener("click", function (event) {
  let nome = document.getElementById("nome");
  let sobrenome = document.getElementById("sobrenome");
  let email = document.getElementById("email");
  let sexRadio = document.getElementsByName("sex");
  let ageRadio = document.getElementsByName("age");
  let termos = document.getElementById("termos");

  let dataExport = true;
  

    if(!nome.value.trim()){
      nome.style.borderColor = "red";
      createWarning("nome-field");
      event.preventDefault();
    }
  
    if(!sobrenome.value.trim()){
      sobrenome.style.borderColor = "red";
      createWarning("sobrenome-field");
      event.preventDefault();
    }
    
    if(!email.value.trim()){
      email.style.borderColor = "red";
      createWarning("email-field");
      event.preventDefault();
    }
  
    let uncheckedSex = true;
    for(let elemento of sexRadio){
      if(elemento.checked){
        uncheckedSex = false;
        break;
      }
    }
    if(uncheckedSex){
      let genders = document.getElementsByName("sex-label");
      for(let elemento of genders){
        elemento.style.color = "red";
        dataExport=false;
      }
      event.preventDefault();
    }
  
    let uncheckedAge = true;
    for(let elemento of ageRadio){
      if(elemento.checked){
        uncheckedAge = false;
        break;
      }
    }
    if(uncheckedSex){
      let ages = document.getElementsByName("age-label");
      for(let elemento of ages){
        elemento.style.color = "red";
      }
      event.preventDefault();
    }
  
    if(!termos.checked){
      document.getElementById("termos-label").style.color = "red";
      dataExport=false;
      event.preventDefault();
    }
    if(dataExport && counter === 0){
      createButton();
      counter=1;
      event.preventDefault();
    }

    event.preventDefault();

});

function createWarning(nomeCampo){

  let campo = document.getElementById(nomeCampo);
  let div = document.createElement("div");
  div.setAttribute("class", "warning");
  div.setAttribute("id","hideme");
  let label = document.createElement("label");
  label.textContent = "Campo obrigatório";
  div.appendChild(label);
  campo.appendChild(div);
}

function createButton(event){
  let campo = document.getElementById("divBotoes");
  let div = document.createElement("div");
  div.setAttribute("class", "newBotton");
  let newButton = document.createElement("button");
  newButton.setAttribute("id", "export3");
  newButton.setAttribute("class", "cadastro-button");
  newButton.setAttribute("onclick","exportDoc()");
  newButton.textContent = "Exportar Contéudo!";
  div.appendChild(newButton);
  campo.appendChild(div);
}

function exportDoc(){
  //Getting MetaData
  var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
       "xmlns:w='urn:schemas-microsoft-com:office:word' "+
       "xmlns='http://www.w3.org/TR/REC-html40'>"+
       "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
  var footer = "</body></html>";
  //Construction of the new page's output for exporting
  var sourceHTML = header
                          +"<ul>Nome: "+document.getElementById("nome").value+"</ul>"
                          +"<ul>Sobrenome: "+document.getElementById("sobrenome").value+"</ul>"
                          +"<ul>Email: "+document.getElementById("email").value+"</ul>"
                          +"<ul>Genero: "+document.querySelector('input[name="sex"]:checked').value+"</ul>"
                          +"<ul>Idade entre: "+document.querySelector('input[name="age"]:checked').id+"</ul>"
                          +footer;

  var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
  var fileDownload = document.createElement("a");
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = 'DadosRegistados.doc';
  fileDownload.click();
  document.body.removeChild(fileDownload);
}