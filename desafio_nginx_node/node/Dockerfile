FROM node:15

WORKDIR /usr/src/app
COPY . . 
EXPOSE 3000
RUN npm install mysql --save

CMD [ "node","index.js" ]

# 
# docker build -t node . 
# docker build -t node:latest  -f Dockerfile.dev
# 
# docker run -p 3000:3000 node
#