const form = document.querySelector('form');
const inputNome = document.getElementById('inNome');
const inputTelefone = document.getElementById('inTelefone');
const inputEmail = document.getElementById('InEmail');
const imgFiltro = document.getElementById('imgFiltro');
const gNome = [];
const gEmail = [];
const gNumero = [];
let idContato = 0;
// const spanExcluir = '<span class="excluir" id="exclui">X</span>';
let linhas='';
form.addEventListener('submit',function(e){
    e.preventDefault();
    linhasTabela();
    atualizaTabela();
})

// spanExcluir.addEventListener('click',(clicou)=>{
// console.log('O botao foi clicado');
// })


function linhasTabela(){
    if(gNome.includes(inputNome.value) || gNumero.includes(inputTelefone.value)){
        alert(`O Contato não adicionado , o Nome ou Número já existem na sua lista de contatos `)
    }
    else{
    gNome.push(inputNome.value);
    gNumero.push(inputTelefone.value);
    gEmail.push(inputEmail.value);

    idContato++;
    let linha = `<tr>`;
    linha+=`<td>ID ${idContato} ${inputNome.value} </td>`;
    linha+=`<td>${inputTelefone.value}</td>`;
    linha+=`<td>${inputEmail.value}</td>`;
    linha+=`</tr>`;

    linhas+=linha;

    inputNome.value = '';
    inputTelefone.value = '';
    inputEmail.value = '';
    }
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

imgFiltro.addEventListener('click', (filtro)=>{
    ativaInputFiltro(filtro);
})

function ativaInputFiltro(){
    const inputFiltro =prompt("Você quer flltrar por ID(Sim ou Nao)?");
    const valorFiltro = inputFiltro;

    if(valorFiltro ==='Sim' || valorFiltro ==='sim'){
        const qualID =prompt('Qual é o Id na Agenda');
        let valorID = parseInt(qualID);
        valorID +=-1;

         alert(`Este é o contato: ${gNome[valorID]}---Número:${gNumero[valorID]}Email---${gEmail[valorID]}`); 
         const tomandoDecisao = prompt('Pressione em atualizá-lo(A) ou excluí-lo(E)?');
         const decisao  = tomandoDecisao;

           if(decisao ==='A' || decisao==='a'){
              let atualizaDados = prompt(`Nome atual ${gNome[valorID]} Insira o novo nome para editar o contato`) 
              let dadosAtualizados = atualizaDados;
              if(dadosAtualizados !=''){

                gNome.splice(valorID , valorID ,dadosAtualizados);
                console.log("Nome atualizado com sucesso!"+gNome);
                // return linhasTabela(inputNome.value = dadosAtualizados);
              } 

                atualizaDados = prompt(`Número atual ${gNumero[valorID]} Insira o novo nome para editar o contato`) 
                dadosAtualizados = parseInt(atualizaDados);

                if(dadosAtualizados != null || dadosAtualizados != ''){
                gNumero.splice(valorID , valorID ,dadosAtualizados);
                console.log("Número atualizado com sucesso!"+gNumero)
                // return linhasTabela(inputTelefone.value = dadosAtualizados)
              }

              atualizaDados = prompt(`Email atual ${gEmail[valorID]} Insira o novo nome para editar o contato`) 
              dadosAtualizados = atualizaDados;

              if(dadosAtualizados !=''){
                gEmail.splice(valorID , valorID ,dadosAtualizados);
                console.log("Nome atualizado com sucesso!"+gEmail)
                // return linhasTabela(inputEmail.value = dadosAtualizados)

              }
           }
           else if(decisao === "E" || decisao === "e"){
               alert(`O contato ${gNome[valorID]}--- Número ${gNumero[valorID]}--- Email ${gEmail[valorID]} será excluído`);
               const excluindo= prompt("você tem certeza que desejas excluir? (SIM) ou (NAO)");

               if(excluindo ==="Sim" || excluindo ==="sim"){
               alert(`O contato ${gNome[valorID]} -- Número ${gNumero[valorID]} --  Email${gEmail[valorID]} foi excluido com sucesso!!!`);
               gNome.splice(valorID);
               gNumero.splice(valorID);
               gEmail.splice(valorID);
               console.log(gNome);
               console.log(gNumero);
               console.log(gEmail);

           }
           else if(excluindo ==='Nao' || excluindo ==='nao'){

           }
    }
    else if(valorFiltro === 'Nao' || valorFiltro === 'nao'){
        alert('Fechando o filtro "_"');
    }
    else{
        alert('Está opção não existe');
    }
}
}
