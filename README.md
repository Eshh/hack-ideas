Hack Ideas - A MEAN stack app to manage Hackathon ideas within an organization

Technologies used: HTML/CSS, Javascript, Angular, Node, MongoDB, Mongoose.

Links:

Deployed URLs:
Client- Netlify- https://hack-ideas-scripbox.netlify.app - Use this link to directly access application
Server-
HTTPS:Render- https://hack-ideas-server.onrender.com/v1/ideas
HTTP:AWS EC2- http://13.127.103.115:8000/v1/ideas


Note : The backend API might be a little slow sometimes as it’s deployed using free shared hosting. Be patient if you see spinner for few seconds 🙂

Docker:
Docker Hub URLs:
Server-https://hub.docker.com/repository/docker/eswarprasadkona/hackideas-server/general
Client - https://hub.docker.com/repository/docker/eswarprasadkona/hackideas-client/general

Image URLs:
Client - https://docker.io/eswarprasadkona/hackideas-client:latest
Server - https://docker.io/eswarprasadkona/hackideas-server:latest


Github:
Root- https://github.com/Eshh/hack-ideas/tree/master
Client- https://github.com/Eshh/hack-ideas/tree/master/client
Server- https://github.com/Eshh/hack-ideas/tree/master/server


How to run ? :

Local:

Take clone of ROOT Github url above
Run this in root folder
$npm install-all


Once done…
Client:
$cd client
$ng serve

Open localhost:4200 in your browser


Server:
Run this in root folder
$npm run server

Note:
To test local backend changes, Change API_BASE_URL to localhost:8000/v1/ideas in AppConfig file in /client/src


Docker:
Take the docker image from above URL and run the following command respectively

Client:
$docker run -it -p 80:4200 eswarprasadkona/hackideas-client
Once done, Just type localhost in your browser .

Note: Don’t add any port numbers to localhost as our Docker container listens to 80(HTTP Internet) default port from our machine

Server:
$ docker run -it -p 8000:8000 eswarprasadkona/hackideas-server
Note:
To test local backend changes, Change API_BASE_URL to localhost:8000/v1/ideas in AppConfig file in /client/src

Author:
Eswar Prasad Kona,
eswarprasad943@gmail.com,
8374759459.
