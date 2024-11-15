
# Simple Web Server

This is a simple web server built using Express.js with three basic routes that return static messages. It’s a beginner-friendly introduction to backend development, created for use with Visual Studio Code or any code editor of your choice.

## Setup Instructions

### Prerequisites:
Make sure you have **Node.js** and **npm** installed. If you don’t have them, you can download and install from [Node.js official website](https://nodejs.org).

### 1. Clone the repository:
```bash
git clone https://github.com/ayanadamtew/simple-web-server.git
```

### 2. Open the project in Visual Studio Code:
Once the repository is cloned, navigate into the project folder and open it in Visual Studio Code:
```bash
cd simple-web-server
code .
```

### 3. Install dependencies:
In the terminal, run the following command to install the necessary dependencies:
```bash
npm install
```

### 4. Start the server:
After the installation is complete, start the server by running:
```bash
npm start
```
The server will start running at [http://localhost:3000](http://localhost:3000).

---

## Routes

- **/name**: Returns your full name as plain text.
  - Example Response: `"Ayana Damtew"`

- **/hobby**: Returns your favorite hobby as a JSON object.
  - Example Response:
    ```json
    { "hobby": "Playing video games" }
    ```

- **/dream**: Returns a motivational message about your dream or goal in life.
  - Example Response: `"My dream is to become a successful software engineer and make a positive impact in the world through technology."`

---

## Deployment

The live version of the server is deployed on Render. You can access the live server here:
[Live Server Link](https://your-app-url.onrender.com)

---

## GitHub Repository

The code for this project is hosted on GitHub:
[GitHub Repository Link](https://github.com/ayanadamtew/simple-web-server)

---

