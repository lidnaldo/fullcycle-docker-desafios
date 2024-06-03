# Repositório com informações dos desafios

## Desafios curso Docker

**1) Você terá que publicar uma imagem no docker hub. Quando executarmos:
docker run <seu-user>/fullcycle
Temos que ter o seguinte resultado: Full Cycle Rocks!!
Se você perceber, essa imagem apenas realiza um print da mensagem como resultado final, logo, vale a pena dar uma conferida no próprio site da Go Lang para aprender como fazer um "olá mundo".
Lembrando que a Go Lang possui imagens oficiais prontas, vale a pena consultar o Docker Hub.
A imagem de nosso projeto Go precisa ter menos de 2MB 
Suba o projeto em um repositório Git remoto e coloque o link da imagem que subiu no Docker Hub.**

- Criado arquivo main.go para exibir mensagem "Full Cycle Rocks!!"; 
- Criado arquivo go.mod simples usado para gerenciar pacotes e dependencias Go, apesar de não conhecer, fez-se necessário para executar dockerfile com sucesso;
- Por fim, criado dockerfile para gerar imagem menor que 2Mb.
<br><br>
    Após baixar repositório, executar os comandos terminal: <br>
    ```docker build -t <seu-user>/fullcycle .```
    <br> ```docker run <seu-user>/fullcycle```

    Para imagem via dockerhub : <br>
    ``docker pull lidnaldo/fullcycle``


**2)Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.
O retorno da aplicação node.js para o nginx deverá ser:   `<h1>Full Cycle Rocks!</h1>`
<br> _-_ Lista de nomes cadastrada no banco de dados. <br>
Gere o docker-compose de uma forma que basta apenas rodarmos: `docker-compose up -d` que tudo deverá estar funcionando e disponível na porta: 8080.
Não esqueça de colocar o volume na aplicação para o ambiente de desenvolvimento. 
<br>Suba tudo em um repositório e faça a entrega.**

- Criado diretório mysql e configurado com execução de comandos no bash do próprio, container e compartilhando volume;
- Criada diretório node com aplicação nodeJs que insere nome aleatório no banco de dados utilizando boblioteca casual do javascript;
- Criado diretório nginx que recebe solicitação e aciona aplicação nodejs na porta 3000; <br><br>

_Obs.: Para execução do desafio 2, executar o docker compose do diretorio desafio_nginx_node_ sem necessidade de entrar no diretório: <br>
`docker-compose -f desafio_nginx_node/docker-compose.yaml up -d`
