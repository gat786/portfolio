---
title: Writing Your First DevOps Pipeline from Scratch for Android Apps.
created_on: 2020-07-20
description: In this blog I explain how using Azure DevOps you can write your first pipeline for your Android Application.
tags: ['Automation', 'Azure', 'CI/CD', 'Android', 'Azure DevOps']
authors: ['ganesht049@gmail.com']
---

# Writing Your First DevOps Pipeline from Scratch for Android Apps.

Before Beginning the topic of Writing a pipeline it is essential for you to understand what DevOps is and why would you want to setup a DevOps for your project or your upcoming project.

If you know the common terminologies, you can skip over to here

The term DevOps is 
```
DevOps is a set of practices that combines software development (Dev) and IT operations (Ops).
```
to quote [Wikipedia](https://en.wikipedia.org/wiki/Continuous_integration) and according to me (considering I'm pretty new to this field) it is a series of practices and stuff that you will do in a software development phase to make your software development easier and more streamlined. These practices include Continuous Integration or CI and Continuous Development or CD. 

CI is integrating codes from developers into a main streamlined repository to keep a main repo with all the code changes. In DevOps world Continuous Integration becomes something like building and testing each commit or change in the repo. It is like every time a change is made on your repository the code will be built automatically and tests will be run (if you have written them ;)) to check the quality of your product. 

Continuous Deployment is to quote [Wikipedia](https://en.wikipedia.org/wiki/Continuous_deployment)
```
Continuous deployment (CD) is a software engineering approach in which software functionalities are delivered frequently through automated deployments.
```
Again my take on this is automated deployment of the builds that have been done through CI to the targeted audience in order to release the pressure from developer to have to manually do that (if you are a developer you already know how far we can go to automate stuff).

Here comes our friend [Azure DevOps] (https://devops.azure.com) to help us out with these things. You can create pipelines to do the things that have been mentioned before for your project to do it all automatically whenever you push an update to your repository.

So now that you know all of this let's jump into the real talk of this blog!

Writing a build pipeline for your Android application

Step 1) 

Create a project in Azure DevOps Portal Go [here](https://devops.azure.com) and sign up using your azure account.

P.S. if you are a student developer you can use [Azure For Students](https://aka.ms/azure4students) Subscription for free to get 100$ for a year to use on Azure. For some reasons if you don't have an Azure Subscription attend a regional event organized by a Microsoft Student Partner or Microsoft Learn Student Ambassador to get codes for activating your Account. :) Thank me later for this advice. 

The Project creation screen for me looked like this

![Project Creation Screen](https://cdn.hashnode.com/res/hashnode/image/upload/v1614866713879/UAbe4a7md.png)

After creating a project, you can do many things such as setup boards to track progress, Track Repos in Azure Repos, see different Artifacts that your pipelines have created, Edit, and run different pipelines for your project but we will jump to creating and editing pipeline.

Step 2) Creating a pipeline 

Open your project and click on the pipelines option on the left-hand side your screen.

![Pipelines Option](https://cdn.hashnode.com/res/hashnode/image/upload/v1614866715680/qU4NH7JMb.png)

Click on Create New Pipeline Button on the following screen you will see and then select GitHub as your Repository Source [if you have some other sources select it, I won't mind]. 

![Create Pipeline Option](https://cdn.hashnode.com/res/hashnode/image/upload/v1614866717439/GsdJZeGMP.png)


![Select Repository Hosted On](https://cdn.hashnode.com/res/hashnode/image/upload/v1614866719252/dNgpO-ZEf.png)

You will need an android project on your account to follow along this blog and if you don't have any as of now you can fork my repo [QuoteIko](https://github.com/gat786/quoteiko) as of now to follow along.

Now after you have selected your repo it will automatically suggest you a few options upon seeing the project structure. You must select the android one from the options.

![select android option](https://cdn.hashnode.com/res/hashnode/image/upload/v1614866721079/Vg9yoWgbT.png)

and after you have done that it will automatically generate a pipeline.yml file for you that describes the things this pipeline would do.

```
trigger:
- master

pool:
  vmImage: 'macos-latest'

steps:
- task: Gradle@2
  inputs:
    workingDirectory: ''
    gradleWrapperFile: 'gradlew'
    gradleOptions: '-Xmx3072m'
    publishJUnitResults: false
    testResultsFiles: '**/TEST-*.xml'
    tasks: 'assembleDebug'
```

What this pipeline will do is easy the first two lines describe as to which triggers it will run upon. like in this case triggers on the master branch.

The pool describes on which VM it will run on. Here it is prewritten as macos but I have seen lesser build times on linux pools so I will recommend you use `ubuntu-latest` for your pools. and then the last field is steps in which each step is something the pool will perform.

Here in our case it is the Gradle task which will ensure that we have the specified Gradle version installed and will run the command according to inputs that is in this case 
`gradlew assembleDebug` and options is nothing but just increasing the ram allocated to the gradle process. 

If you were to develop a Release version app you can write the step as below.
```
steps:
- task: Gradle@2
  inputs:
    workingDirectory: ''
    gradleWrapperFile: 'gradlew'
    gradleOptions: '-Xmx3072m'
    publishJUnitResults: false
    testResultsFiles: '**/TEST-*.xml'
    tasks: 'assembleRelease'
```

At the end, your pipeline file should look like this

```
trigger:
- master

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: Gradle@2
  inputs:
    workingDirectory: ''
    gradleWrapperFile: 'gradlew'
    gradleOptions: '-Xmx3072m'
    publishJUnitResults: false
    testResultsFiles: '**/TEST-*.xml'
    tasks: 'assembleDebug'
```

And boom there you go!. 

If you had any questions regarding any of the things feel free to contact me at any of the given platforms.

[twitter](https://twitter.com/ganeshtiwari786)
[linkedin](https://linkedin.com/in/gat786)
[instagram](https://instagram.com/iwrotestan)
