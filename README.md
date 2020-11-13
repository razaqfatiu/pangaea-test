# Pangaea BE Coding Challenge

**SETUP**

- Run this in the command line: git clone https://github.com/razaqfatiu/pangaea-test.git.
- cd pangaea-test and run "npm install".
- In your text editor, change the .env.sample file to .env and provide the required credentials .
- Run "npm run migrate" and "npm start" respectively.

It works like this:

POST localhost:8000/publish/{TOPIC} - creates a new topic

POST localhost:8000/subscribe/{TOPIC} - creates a new topic if not exist and subscribe to the topic and returns all the events assocaited with that topic.

**Kindly specify your port if you have not choosen 8000**
