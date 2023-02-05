# Music-Theory-Manual
## Description
Music Theory Manual is an online music application that, once you either login and create an account, allows you unlimited access to information on a variety of topics relating to essential music theory concepts. On top of that, it also acts as a study app as you will be able to set yourself a list of what you want to look into on the app and track your test results through your own profile page. 

## Table of Contents 
* [Link to Deployed Site](#Link-to-Deployed-Site)
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Installation](#Installation)
* [Usage](#Usage)
* [Technologies Used](#Technologies-Used)
* [Contact](#Contact)

## Link to Deployed Site
[https://intense-coast-35292.herokuapp.com/](https://intense-coast-35292.herokuapp.com/)


## User Story
```bash
As a musician wanting to learn music theory
I want to have a place where I can find any information I want and make a list of topics I want to learn 
So that I can learn effectively without being overloaded by information

```

## Acceptance Criteria
```bash 
GIVEN a music theory education website
WHEN I enter the site 
THEN I am taken to a homepage and prompted to login
WHEN I do not have an account
THEN I am given the option to sign up
WHEN I have logged inn or created an account
THEN The login prompt is gone and I am given access to various pathways to information as well as a unique profile page
WHEN I go to the profile page 
THEN I am presented with a welcome message and prompts to view goals and test scores
WHEN I go to the goals section 
THEN I am presented with a text input and either a sortable list of previously created goals or a message telling me I currently have no goals
WHEN I submit a goal into the text area
THEN it is saved to my profile
WHEN I click a delete button on a goal
THEN that goal is removed 
WHEN I go to the tests section 
THEN I am shown a list of tests I have done with my most recent score
WHEN I travel to an information section of the website
THEN I am presented with subsections of that topic with increasing difficulty
WHEN I select a subsection of that topic
THEN I am taken to a series of cards containing information on that subsection
WHEN I am taken to the end of a section
THEN I am presented with the option to do a test on the topic
WHEN I choose to do a test 
THEN I am given ten sequential questions on the topic of the section
WHEN I finish all ten questions 
THEN I am shown my score, which is saved to my profile
```

## Installation
In order to run this code on your local device, without the use of the heroku link, all you will have to do is download the code and run the following npm commands through the terminal.

```bash
npm i / npm install
npm run seed
npm run develop
```

## Usage
Once you enter the site, you'll be presented with a home page giving a description of the intentions behind the website and a brief summary on its features. This home page can be accessed at any time through clicking the name of the website in the page's header. From there, you'll also have access to  navbar with all the topics available. Each topic page contains a brief description of what the contents of the page mean and subsections of information on that topic. From the navbar you'll also be given the option to log in if you haven't already. The option to sign up is also available on the login page. Once you have logged in, you'll be given access to a new page called profile. This profile page interacts directly with your saved session and gives you access to the study notes feature. You can create and delete study note or goals as you wish and, once you're done, a logoout button is present at the bottom of the page.

## Technologies Used
* Github
* HTML
* CSS
* Javascript
* Heroku
* Node
* Express
* React
* MongoDB
* Mongoose
* JSON Web Token
* Brcypt
* GraphQL
* Apollo Server Express
* Apollo Client
* Concurrently
* Nodemon
* React Router

## Contact
If you have any questions or want to see other work I've done, my email and github are provided below.

* milesman2013@gmail.com
* https://github.com/MDThomas1
