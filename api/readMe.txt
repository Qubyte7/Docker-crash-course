## Terminnal :
==> show images  : docker image
==> running docker image : docker image --name ****** -p portN1:portN2 -d YouDockerImage  
 
 (****** is the new name that your prefer to name your image when running ,
 -p : publish means publishing/mapping  our container port to host computer,
 portN2: this the port exposed by our container ,
 portN1: is the port that we want to map to that container on our computer ,
 -d: this means that we are running our app in a detach mode to mean our Terminal is detached from the process)

==> showing all containers : docker ps -a
==> showing containers running : docker ps
==> shutdowning a container : docker stop ContainerName
==> restarting a container : docker start ContainerName

NB: when we run : 
   ===>RUN : it creates a new continer
   ===>START :  starts the existing docker container










