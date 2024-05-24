# Etapa de construção
FROM golang:alpine AS build
WORKDIR /go/src/app
COPY . .
# Gerar um binário estático para ser executado 
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .  
# também poderia ser usado o "RUN go build -o app ." porem, ao consultar, podem existir ambientes de execucao incompativeis


# Etapa de execução
FROM scratch
# copiar o binario (app) gerado na etapa de construcao
COPY --from=build /go/src/app/app .
# executar o binario
CMD ["./app"]
