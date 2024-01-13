FROM node:16.6.2-alpine

WORKDIR /app
#root
# COPY package.json ./
# RUN npm run root-install

#server node
COPY package.json .
RUN npm install --omit=dev

#source code copy
COPY . .

USER node

CMD ["npm","start"]

EXPOSE 8000