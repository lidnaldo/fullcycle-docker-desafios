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


    Após baixar repositório, executar os comandos terminal: <br>
    ```docker build -t <seu-user>/fullcycle .```
    <br> ```docker run <seu-user>/fullcycle```






