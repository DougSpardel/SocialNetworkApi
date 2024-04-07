# Social Networking API

This project is a backend API for a social networking application. It allows users to share their thoughts, react to friends' thoughts, and create a friend list. Built with Node.js, Express, and MongoDB, it showcases RESTful API design and MongoDB document relationships.

## Features

- Users can create, update, and delete an account.
- Users can post thoughts.
- Users can react to thoughts and remove their reactions.
- Users can add friends to and remove friends from their friend list.
- Real-time updates with MongoDB database.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose ODM

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installing

1. Clone the repository to your local machine
2. Navigate to the project directory
3. Install using npm i
4. Seed the database with initial data 
5. Start the server


## Usage

See Video for Insomnia Guidance
https://www.loom.com/share/390eb352b67545c6863ca55047d0e93c Links to an external site.

### API Endpoints

- **Users**
  - `GET /api/users`: Get all users
  - `GET /api/users/:id`: Get a single user by ID
  - `POST /api/users`: Create a new user
  - `PUT /api/users/:id`: Update a user by ID
  - `DELETE /api/users/:id`: Delete a user by ID
  - `POST /api/users/:userId/friends/:friendId`: Add a friend
  - `DELETE /api/users/:userId/friends/:friendId`: Remove a friend

- **Thoughts**
  - `GET /api/thoughts`: Get all thoughts
  - `GET /api/thoughts/:id`: Get a single thought by ID
  - `POST /api/thoughts`: Create a new thought
  - `PUT /api/thoughts/:id`: Update a thought by ID
  - `DELETE /api/thoughts/:id`: Delete a thought by ID

- **Reactions**
  - `POST /api/thoughts/:thoughtId/reactions`: Add a reaction to a thought
  - `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


