Junior Full Stack Developer Interview Round 1 (js/node track)
==================================

Purpose
-------
The purpose of this repository is to check whether a developer has the basic skills required to work on the team and has the base skills expected of any developer.

Would be developers are welcome to explore the project before being interviewed as well as attempting it on their own prior to being interviewed. Developers are welcome to ask other developers for help, google copy other peoples results or pretty much do whatever you want.

What is being tested?
---------------------

We are testing basic command line skills, knowledge of version control systems, logical thinking and the ability to google.

Technologies that will be used?
-------------------------------

 1. Linux 
 2. Git
 3. Nodejs 
 4. Mongodb
 5. Angularjs
 6. Your brain

Test Overview
-------------

Most of development and servers are **Linux** based.  You can use windows for the test but you would need to provide a fairly good reason why you prefer it. (Saying because my computer came with it is not a good answer)

We will be testing your knowledge of **GIT** to ensure you have at the very least the basic skills required be part of the time.

The repository will contain a few folders each containing a different part of the project. You will be required to run the application using **nodejs** as well as connecting to a remote **mongodb** database and in some examples ensure you have a mongod server running locally.

In addition to the basic setup you will be required to edit a database find as well as write a short **algorithm** to perform a logical task as well as **refactor** a poorly written piece of code.

Finally you will be required to create your own git repository add a **remote**, push your working branch to your remote and open a pull request on **github** merging it into the base branch.

How long should this take me?
-----------------------------
Well.... That depends. If you read the overview and are scratching your head you are either not the right person for the job or are willing to do a lot of quick reading and get yourself up to speed as soon as possible.

In general for someone who already has git, node and mongo installed it could take them 10 minutes. Others 30-40 minutes and some might just never get it right.

I have been working on this for 2 hours and I still cant get it right?
----------------------------------------------------------------------

Just breathe... Take a break and decide if this is something you really want to do. IF yes make sure you have googled well and ask a friend for help. At the end of the day we all started off knowing nothing so you might just be the next rockstar programmer.

Lets get this thing over with (the test itself)
-----------------------------------------------

PART 1 - Server

 1. Clone this repo
 2. Create a new branch called *junior-full-stack-js-1* based off of the remote branch *junior-full-stack-js-1* 
 3. From the project root run  `uname -o | xargs echo "<YOURNAME>"> AUTHORS`
 4. Git add the new file to your project
 5. Commit the change with a meaningful message. (don't forget to ensure you git config is setup)
 6. Edit the config file in`config/interview.js`and replace the default mongdb connection string with this remote read-only database `mongodb://public-r:itspublic@ds051110.mongolab.com:51110/junior-fullstack-js-1` 
 7. Commit this change with a meaningful message
 8. Run `npm install`
 8. Run the nodejs application with the environment variable `interview`as we edited the interview config. To run it with default environment variable of development you do `node bin/www`
 9. In your browser go to `http://127.0.0.1:3000/articles` You should see a list of articles in JSON format
 10. Change the database query to only accept *published* articles. Each article has a boolean field called *published*. By default it is false and changed to true once it has been published.
 11. Make a setLimit() function to limit the number of results 10. The setLimit() function must check for non negative values less than 500 that are numerical.
 12. Order the results by the *updated* field with the most recent item being at the top of the list
 13. Create your own repo on github and setup a remote to that new repo see `git remote add --help`
 14. Push your branch to your own repo
 15. Make a pull request of the original project to the *junior-full-stack-js-1* branch


PART2 - Client
