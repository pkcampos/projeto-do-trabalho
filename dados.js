

//QUESTÃO 1

function submitQuestion() { // requisição para o servidor 3000 questao 1 


   // let url = "http://localhost:3000/pergunta_1_e_3/"; // Altere a URL conforme necessário http://localhost:3000/testedomodelo/
   let url = "http://localhost:3000/pergunta_1_e_3/";
    let pergunta1 = document.getElementById("question").value;
    

    let body = {
        "pergunta1": pergunta1
    };

    // Enviar a resposta para o servidor
    fazPost(url, body)
    .then(response => {
        console.log('Resposta enviada com sucesso:', response);
        document.getElementById("question").value = ""; // Limpar o campo de resposta após o envio
    
        // Criar uma string contendo o HTML do segundo formulário
        let novoForm = `
            <div class="question-box2">
                <div class="question">
                    <h2><span class='pergunta6'>O gráfico da função y = x² + 2 é :</span></h2>
                </div>
                <div class="options">
                    <button   onclick="selectOption('reta')">Reta</button>
                    <button   onclick="selectOption('parabola')">Parábola</button>
                </div>
            </div>
        `;

        // Selecionar o elemento que contém a pergunta atual
        let perguntaAtual = document.querySelector('.centro');

        // Atualizar o conteúdo do elemento com o novo formulário
        perguntaAtual.innerHTML = novoForm;
    
    })

    .catch(error => {
        console.error('Erro ao enviar resposta:', error);
        document.getElementById("question").value = ""; // Limpar o campo de resposta em caso de erro
    });
}

function fazPost(url, body) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    });



}




//QUESTÃO 2

function selectOption(opcao) { // requisão da pergunta 2 > neste caso para coleção pergunta 2
    let url = "http://localhost:3001/pergunta2/"; // URL do endpoint no servidor

    // Modifique o objeto body para incluir a opção selecionada e outros dados relevantes
    let body = {
        
        "opcao": opcao // Obtém o texto da resposta do campo de entrada
    };

    // Envia a requisição POST para o servidor com os dados
    fazPost(url, body)
    .then(response => {
        console.log('Opção selecionada com sucesso:', response);

        // Dependendo da opção selecionada, exibir o formulário correspondente
       
        let novoForm = `
        <div class="question-box">
            <h2><span class='pergunta6'>Você utiliza alguma técnica para aprender conteúdos de exatas? Se sim, quais?</span> </h2>
            <textarea id="question3" placeholder="Digite reposta aqui"></textarea>
            <button onclick="submitQuestion3()">Enviar Pergunta</button>
        </div>
    `;
    
    // Selecionar o elemento que contém a pergunta atual
    let perguntaAtual = document.querySelector('.centro');

    // Atualizar o conteúdo do elemento com o novo formulário
    perguntaAtual.innerHTML = novoForm;
    })
    .catch(error => {
        console.error('Erro ao selecionar opção:', error);
    });
}

// QUESTÃO 3
function submitQuestion3() {  //requisição para a questão 3 ( mesma coleção da questão 1)


    let url = "http://localhost:3000/pergunta_1_e_3/"; // Altere a URL conforme necessário

    let pergunta3 = document.getElementById("question3").value;
    

    let body = {
        "pergunta3": pergunta3
    };

    // Enviar a resposta para o servidor
    fazPost(url, body)
    .then(response => {
        console.log('Resposta enviada com sucesso:', response);
        document.getElementById("question3").value = ""; // Limpar o campo de resposta após o envio
    
        // Criar uma string contendo o HTML do segundo formulário
        let novoForm = `
        <div class="question-box">
        <h2><span class='pergunta6'>Você utiliza alguma técnica para aprender conteúdos de humanas? Se sim, quais?</span></h2>
        <textarea id="question4" placeholder="Digite reposta aqui"></textarea>
        <button onclick="submitQuestion4()">Enviar Pergunta</button>
    </div>
        `;

        // Selecionar o elemento que contém a pergunta atual
        let perguntaAtual = document.querySelector('.centro');

        // Atualizar o conteúdo do elemento com o novo formulário
        perguntaAtual.innerHTML = novoForm;
    
    })

    .catch(error => {
        console.error('Erro ao enviar resposta:', error);
        document.getElementById("question3").value = ""; // Limpar o campo de resposta em caso de erro
    });
}

function fazPost(url, body) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    });


}


//QUESTÃO 4
function submitQuestion4() {  //requisição para a questão 4 ( mesma coleção da questão 1)

    let url = "http://localhost:3002/pergunta_4_e_5/"; // Altere a URL conforme necessário

    let pergunta4 = document.getElementById("question4").value;
    
    let body = {
        "pergunta4": pergunta4
    };

    // Enviar a resposta para o servidor
    fazPost(url, body)
    .then(response => {
        console.log('Resposta enviada com sucesso:', response);
        document.getElementById("question4").value = ""; // Limpar o campo de resposta após o envio
    
        // Criar uma string contendo o HTML do segundo formulário
        let novoForm = `
        
        <div class="question-box2">
        <div class="question">
            <h2><span class='pergunta6'>Quantos continentes existem ?</span></h2>
        </div>
        <div class="options">
        <button   onclick="selectOption5('2')">2</button>
        <button   onclick="selectOption5('8')">8</button>
        <button   onclick="selectOption5('4')">4</button>
        <button   onclick="selectOption5('6')">6</button>
        <button   onclick="selectOption5('3')">3</button>
        </div>
    </div>


        `;

        // Selecionar o elemento que contém a pergunta atual
        let perguntaAtual = document.querySelector('.centro');

        // Atualizar o conteúdo do elemento com o novo formulário
        perguntaAtual.innerHTML = novoForm;
    
    })

    .catch(error => {
        console.error('Erro ao enviar resposta:', error);
        document.getElementById("question4").value = ""; // Limpar o campo de resposta em caso de erro
    });
}

function fazPost(url, body) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    });


}


//QUESTÃO 5

function selectOption5(opcao5) { // requisão da pergunta 5  coleção 4_E_5 
    let url = "http://localhost:3002/pergunta_4_e_5/"; // URL do endpoint no servidor

    // Modifique o objeto body para incluir a opção selecionada e outros dados relevantes
    let body = {
        
        "pergunta5": opcao5 // Obtém o texto da resposta do campo de entrada
    };

    // Envia a requisição POST para o servidor com os dados
    fazPost(url, body)
    .then(response => {
        console.log('Opção selecionada com sucesso:', response);

        // Dependendo da opção selecionada, exibir o formulário correspondente
       
        let novoForm = `
        <div class="question-box">
        <h2><span class='pergunta6'>Existe alguma ferramenta (vídeos, sites, pesquisa) que você utiliza para estudar? </span></h2>
        <textarea id="question6" placeholder="Digite reposta aqui"></textarea>
        <button onclick="submitQuestion6()">Enviar Pergunta</button>
    </div>
    `;
    
    // Selecionar o elemento que contém a pergunta atual
    let perguntaAtual = document.querySelector('.centro');

    // Atualizar o conteúdo do elemento com o novo formulário
    perguntaAtual.innerHTML = novoForm;






    })
    .catch(error => {
        console.error('Erro ao selecionar opção:', error);
    });
}


//QUESTÃO 6

function submitQuestion6() {  //requisição para a questão 6 ( mesma coleção da questão 7)


    let url = "http://localhost:3003/pergunta_6_e_7/"; // Altere a URL conforme necessário

    let pergunta6 = document.getElementById("question6").value;
    

    let body = {
        "pergunta6": pergunta6
    };

    // Enviar a resposta para o servidor
    fazPost(url, body)
    .then(response => {
        console.log('Resposta enviada com sucesso:', response);
        document.getElementById("question6").value = ""; // Limpar o campo de resposta após o envio
    
        // Criar uma string contendo o HTML do segundo formulário
        let novoForm = `
        <div class="question-box">
        <h2><span class='pergunta6'> Você acha o caderno importante para você aprender exatas? </span> </h2>
        <textarea id="question7" placeholder="Digite reposta aqui"></textarea>
        <button onclick="submitQuestion7()">Enviar Pergunta</button>
    </div>
        `;

        // Selecionar o elemento que contém a pergunta atual
        let perguntaAtual = document.querySelector('.centro');

        // Atualizar o conteúdo do elemento com o novo formulário
        perguntaAtual.innerHTML = novoForm;
    
    })

    .catch(error => {
        console.error('Erro ao enviar resposta:', error);
        document.getElementById("question6").value = ""; // Limpar o campo de resposta em caso de erro
    });
}

function fazPost(url, body) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    });


}

//QUESTÃO 7

function submitQuestion7() {  //requisição para a questão 6 ( mesma coleção da questão 7)


    let url = "http://localhost:3003/pergunta_6_e_7/"; // Altere a URL conforme necessário

    let pergunta7 = document.getElementById("question7").value;
    

    let body = {
        "pergunta7": pergunta7
    };

    // Enviar a resposta para o servidor
    fazPost(url, body)
    .then(response => {
        console.log('Resposta enviada com sucesso:', response);
        document.getElementById("question7").value = ""; // Limpar o campo de resposta após o envio
    
        // Criar uma string contendo o HTML do segundo formulário
        let novoForm = `
        <div class="question-box2">
        <div class="question">
            <h2><span class='pergunta6'>Quais das opções abaixo mais se aproximam da sua opinião sobre o ChatGPT</span></h2>
        </div>
        <div class="options">
            <button   onclick="selectOption8('boa')">bom</button>
            <button   onclick="selectOption8('ruim')">ruim</button>
            <button   onclick="selectOption8('regular')">regular</button>
            <button   onclick="selectOption8('otimo')">otimo</button>
        </div>
    </div>
        `;

        // Selecionar o elemento que contém a pergunta atual
        let perguntaAtual = document.querySelector('.centro');

        // Atualizar o conteúdo do elemento com o novo formulário
        perguntaAtual.innerHTML = novoForm;
    
    })

    .catch(error => {
        console.error('Erro ao enviar resposta:', error);
        document.getElementById("question7").value = ""; // Limpar o campo de resposta em caso de erro
    });
}

function fazPost(url, body) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    });


} 


//QUESTÃO 8

function selectOption8(opcao8) { // requisão da pergunta 2 > neste caso para coleção pergunta 2
    let url = "http://localhost:3001/pergunta2/"; // URL do endpoint no servidor

    // Modifique o objeto body para incluir a opção selecionada e outros dados relevantes
    let body = {
        
        "opcao8": opcao8 // Obtém o texto da resposta do campo de entrada
    };

    // Envia a requisição POST para o servidor com os dados
    fazPost(url, body)
    .then(response => {
        console.log('Opção selecionada com sucesso:', response);

        // Dependendo da opção selecionada, exibir o formulário correspondente
       
        let novoForm = `
        <div class="question-box">
            <h2> <span class='final'> OBRIGADO PELA PARTICIPAÇÃO!</class> </h2>
            
    `;
    
    // Selecionar o elemento que contém a pergunta atual
    let perguntaAtual = document.querySelector('.centro');

    // Atualizar o conteúdo do elemento com o novo formulário
    perguntaAtual.innerHTML = novoForm;






    })
    .catch(error => {
        console.error('Erro ao selecionar opção:', error);
    });
}


