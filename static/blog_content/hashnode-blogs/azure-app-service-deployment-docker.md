---
title: Deploying any Web Service on Azure App Service (We will use docker) 
created_on: 2021-02-08
description: In this blog I explain how to deploy any web service on Azure App Service using docker containers.
tags: ['App Service', 'Azure', 'Docker']
authors: ['ganesht049@gmail.com']
---

# Deploying any Web Service on Azure App Service (We will use docker)

Deploying a Web API is essential for every project nowadays and if you are trying to do so yourself you have many options available from the cloud providers which are already present in the market and Azure is a very promising option in them. While choosing Azure the easiest way to setup your Web-API is through [Azure App Service] (https://docs.microsoft.com/en-us/azure/app-service/).

Now App Service out of the box supports PHP, JavaScript, NodeJS, dotnet, dotnet core, Java, Python and Ruby. Meaning you can just connect your repository where you are working with the web-api to the Azure App Service, and it will automatically work with deploying it as soon as you push any commits or changes.

---
Note that -
Docker Containers are nothing but self-contained applications. 

i.e. Whenever you want to run a container you build a docker image which contains all the dependencies it will need to run. 
And then you run the image which when is running, we call it as a container. 

---

While doing that is an effective there are other ways to deploy on App Service i.e. Using Docker Containers. Now using docker containers makes things

1. Open - You have complete idea about how your application is running and what environment it is in.

2. Controlled - You will have to specify every detail about how you want this application to be built so the whole building process is under your control.

Let's start with writing a docker file for a standard [FastAPI](https://github.com/tiangolo/fastapi) project. 

Hoping that your project is itself in a virtual environment and every dependency your application needs is installed in your environment we will pipe down all the python packages in your environment to a requirements.txt file which will be in the root of your folder like this. 

To see which packages your current environment has type 

```sh
pip freeze 
```
What we have to do is write the contents of this output in our `requirements.txt` file which you can do manually or just use this command from the virtual environment console when it is activated

```sh
pip freeze > requirements.txt
```

The same command should work fine on Windows as well as Linux. 

Now that we have a `reqirements.txt` file with requirements of our environment we want to create a Dockerfile with instructions of how this image is going to be build.

Assuming you are in the root directory of your project, what you want to do is create a file named `Dockerfile` and write the contents as below.

Creating a file on Linux can be done like `touch Dockerfile` and on Windows can be done like `echo "" > Dockerfile`.

```
FROM python:3.8-slim-buster

COPY requirements.txt .

RUN pip3 install -r requirements.txt

EXPOSE 80

COPY ./app /app

CMD ["python", "-m","uvicorn","app.main:app","--host","0.0.0.0","--port","80"]
```

Now what a Dockerfile does is gives line by line instruction as to how an image must be built now in our case we have a sweet 6 lines is 

1. The base image for building our personalized image should be [python:3.8-slim-buster](https://hub.docker.com/layers/python/library/python/3.8-slim-buster/images/sha256-fead43562234f12d7873784248f229709cb30fa642d3481e446079232e96566b?context=explore).

2. Copy the `requirements.txt` file from the root folder of project into our docker images root folder.

3. Install all the dependencies we have listed in our `requirements.txt` file.

4. Expose Port 80 for http incoming traffic so that when we run our app on this port it will be broadcasted to the host on which we run the container. 
F.Y.I. port 80 is port for all the http traffic thats why we are using it.

5. Copy all the contents in the `app` folder to `app` folder in our docker image. 
F.Y.I `app` folder contains all the source code for our web-api.

6. Run command for our server to get started on localhost `0.0.0.0` and port `80` and since the file i.e. `main.py` in which our app is located is inside `/app` folder we write `app.main` and `:app` for the FastAPI app variable declared inside `main.py`

After you have created one such Dockerfile the command to build an image from this Dockerfile would be - 

```sh
docker build -t tag-name-for-your-image .
```

This will check the dockerfile in the `.` directory and build the image according to its content. It will download the base-image, download all the python dependencies make a bundle out of it and save it as a docker image with a tag `tag-name-for-your-image`. You should choose a useful tagname to recognize your images.

If it successfully creates an image then running that image will be like this -

```sh
docker run --name container-name -p 80:80 tag-name-for-your-api
```
If everything goes well you will be presented with an output which looks like this.

![Terminal Output](https://cdn.hashnode.com/res/hashnode/image/upload/v1614866662813/s0zHlIIny.png)

Now is the time that you start your Postman Client and check whether the app successfully works or not. If it does then we are more than halfway done. 😎🙌

Running a docker container is as easy as fetching the image from a container registry and doing executing the `RUN` command from the Dockerfile. 

So, for Azure App service to be able to pull it and run it we need to put it on some Container registry. Azure has its own container registry named Azure Container Registry `ACR` which we will be using here. You can go on Azure Portal and create a container registry in your preferred location and then follow along this blog post.

The best way to build and upload docker images to ACR is through CI/CD i.e. Continuous Integration and Continuous Deployment. With Azure DevOps building a pipeline for doing the same is just a process of few clicks.

1. Sign into your Azure DevOps Account.

2. Create a new project.
![Create a project example](https://cdn.hashnode.com/res/hashnode/image/upload/v1614866664511/1dW49a2GD.png)

3. Create a new pipeline 
![Create a new pipeline](https://cdn.hashnode.com/res/hashnode/image/upload/v1614866666308/N1mDXoqkx.png)

4. Select code repository to be from GitHub.
 ![Select GitHub as source for code](https://cdn.hashnode.com/res/hashnode/image/upload/v1614866668866/cr3N2LWeY.png)

5. Select the repository in which your code is deployed at.

6. After you have got your code from the repository next step is to create a YAML pipeline to build and push your image to your registry. Select an appropriate task for your pipeline 
![Select appropriate task for your pipeline](https://cdn.hashnode.com/res/hashnode/image/upload/v1614866670728/xveFfn9G2.png)

7. After selecting the proper task all you must do is select the Container registry which you created in the earlier part as your registry and provide a repository name for your image to be uploaded to.

Bamm! 🔥 Although it was a big task, we did it!

We only have deploying part remaining now, let's do it.

1. Go to your Azure Portal. Click on create a new resource -> Create a new Web App.

2. Fill in the details as per your wishes here is a short example of what I wrote
![Example Web Api](https://cdn.hashnode.com/res/hashnode/image/upload/v1614866672757/5aVfjkuco.png)

3. Select the Registry as Azure Container registry and registry name and repository name as to the details which you would have chosen before.

4. Make sure you select the latest tag in order to deploy the image.

![docker image options](https://cdn.hashnode.com/res/hashnode/image/upload/v1614866674686/uYgXsQE0t.png)

5. Click on Review + Create button on the bottom and then Create Button after it.

Done! Azure will now pull the image from ACR and run it as a Web App. With this method of deployment you can run code of any language you want on Azure as long as you can create a docker file for it. 👍😍

Thats all for this blog post. I hope to continuously write more blog posts and grow my collection of carefully written blogs. I hope that this one helped you out.

Follow me on [twitter](https://twitter.com/igat786) to get further connected with me. I will watching the comments section if you find any doubts about this blog do let me know. :)
