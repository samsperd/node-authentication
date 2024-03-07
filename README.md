# Node Authentication

## How to run the backend server

In the project directory, you can run:

### `npm install`

This will install all the necessary dependencies for the application to work.\

The application uses nodemon so the api will restart when you make changes.\

### `npm run dev`

This will install all the necessary dependencies for the application to work.\
The endpoint runs at [http://localhost:5000](http://localhost:5000).

The application uses nodemon so the api will restart when you make changes.

**Note: This application uses postgresql, so it is important to have postgres installed on your computer and also have it running before you run this application. Once you have postres installed, you can then create a database called `obinna_local` or rename the database in the development object!**

Once you have created the database or renamed it, you can then run `npx sequelize-cli db:migrate` to run migrations, creating tables and required columns for the application's database.
# node-authentication
