# Pilar - Front-End Technical Test

This is a Front-End technical test for Pilar! This test is designed to create webpage that lists movies, where users can interact and access individual movie pages through cards.

## Project Preview

A demo of this project can be accessed at [https://case-frontend-pilar.vercel.app/](https://case-frontend-pilar.vercel.app/).

## Features

- **List movies**: User can see a list of trending or popular movies at the home page.
- **Search movies**: User can search a movie.
- **Toggle between popular and trending movies**: At the home page, the user can filter the movies by popular or trending.
- **Movie details**: The user can navigate to a details page by clicking in one of the movie cards. In this page the user can see general information about the movie such as poster, title, rating, release date, cast and crew members.

## Installation

To get started with the project, follow these steps:

1. Clone this repository to your local machine
2. Navigate to the project directory: `cd case-frontend-pilar`
3. Install dependencies by running `npm install`
4. Create a .env file in the root of the project and add your api key as shown in the .env.example file

## Usage

To run the development server, execute the following command:

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

To run tests, execute the following command:

```bash
npm run test
```

## Backend API

This project uses The Movie Database (TMDB) api to fetch movies. The documentation can be seen [here](https://developer.themoviedb.org/docs/getting-started)

## Folder Structure

```
src/
│   ├── assets/            # Static assets like images, icons and fonts
│   ├── components/
│   │   └── ...            # Reusable components
│   ├── core/
│   │   └── ...            # Global types and api instance
│   ├── helpers/
│   │   └── ...            # Helper functions that can be used anywhere in the project
│   ├── pages/             # Route level pages
│   │   ├── home/          # Home where where movies are shown
│   │   │   └── ...
│   │   ├── search/        # Movies search page
│   │   │   └── ...
│   │   └── movie-details/ # Movie details page where all information about the movie is shown
│   │   │   └── ...
│   ├── routes/
│   │   └── routes.tsx     # Application routes
│   ├── services/          # Any service the application migth consume
│   ├── App.tsx            # App component
│   ├── index.css          # Global stylesheet
│   ├── main.tsx           # Entry point of the application
│   ...
```

## Built With

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Moment](https://www.npmjs.com/package/moment)
- [Lucide](https://lucide.dev/)

## Author

- [Eduardo Fernandes](https://github.com/EduCFernandes)
