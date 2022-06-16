FROM  node:alpine
COPY .  /app
CMD npm run app
WORKDIR /app