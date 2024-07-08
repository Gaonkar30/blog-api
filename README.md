# Blog API

A simple blogging platform API built with Node.js, Express, and MongoDB.

## Features

- Return a list of articles with optional filters such as publishing date or tags.
- Return a single article specified by the ID.
- Create a new article to be published.
- Delete a single article specified by the ID.
- Update a single article specified by the ID.

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- Git

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blog-api.git
   cd blog-api
2.Install dependencies:
    npm install
3.Set up environment variables:
   Create a .env file in the root directory and add your MongoDB configuration:MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.qtxxlfs.mongodb.net/<dbname>?retryWrites=true&w=majority
   PORT=3000
4.Start the server:
  node app.js

