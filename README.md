# Flashy: AI powered flash cards

Flashy uses the OpenAI API to deliver curated flash cards for users.

The app takes in user input such as school notes or text from textbooks and curates flash cards with questions and answers. Using Open AI's gpt-3.5-turbo, we are able to create study materials using AI, automating the tedious task of making flash cards from scratch.

In the near future, we plan to add supoort for pdf's, longer tetxs and greater control over flashcard content.

# Tech Stack

**Client:** TypeScript, ReactJS, Tailwind

**Server:** Python, Flask, Nginx, SQLAlchemy

**Database:** Redis, PostgreSQL

**AI:** OpenAI API

**Other:** Docker


# Configuring the repo for the first time and running the application

## Deploy this application locally

The instructions below will allow you to run this project on your local computer using 

**make build**

1. Run the following command in the terminal to download a copy of the repo to your local machine

```bash
  git clone https://github.com/ThaumicMekanism/calhacks-2023.git
```

- Navigate into the new sub-folder created called **calhacks-2023**.

2. After the project repo is downloaded navigate into the project directory

```bash
  cd calhacks-2023
```

3. Manually open Docker desktop or run the command below to open Docker

```bash
 open -a Docker
```

4. Once the Docker desktop is runnning, type the command below to create and start the containerized application

```bash
  make build
```

At this point the container with the app should be running in your local computer

Services are running on **Port 3000** (front-end React), **Port 5001** (back-end REST). Please make sure you have no other app running on these ports

5. Run the following command to create and reset the Messages table in the database.

- This command can be used any time you want to delete and reset all the data in the database

```bash
make clean
```

Open a browser to the local host **http://localhost:3000/** and start using the app!

# Demo

The browser on the left is Google Chrome and the Browser on the right is Firefox. The demo below displays a chat communication between two users using WebSocket communication. Notice that when a message is sent by one user, the other user receives the message without having to re-render the component or the page. Also the mssages being sent are saved to the database, so when the page is re-loaded or opened on a new tab all the historical messages are fetched on the rendering of the page.
