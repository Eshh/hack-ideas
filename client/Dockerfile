FROM node:16.6.2-alpine

WORKDIR /app

# client angular
COPY package.json .
RUN npm install


#source code copy
COPY . .
# RUN npm run build --prefix client


USER node

CMD ["npm","start"]

EXPOSE 4200