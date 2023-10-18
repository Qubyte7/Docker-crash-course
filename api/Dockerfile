FROM node:17-alpine 
#the above line specifies the parent directory
WORKDIR /app
#WORKDIR is used to define the working directory that we will be using for our image creation 

COPY . . 
# COPY . /app  : the first . means to copy * in the current directory and the " second point ." is the place where I want to copy to my source code which I have copied
#in our case as the working directory is /app it will copuied in  the app directory
EXPOSE 8080
#it is used to expose the port that our app is running on

RUN npm install
#RUN ==> is used to specify the command that we run when we are developing our image
CMD [ "node","app.js" ]
#CMD => normally we can not run our application at the creation of the image because the image id a blue print of a container 
#CMD uses to specify the command that we will run when the container beginns to run

# how we run the Dockerfile  ====>"" docker build -t NameYouGiveYourImage  PathToYout=rDockerfile  "
