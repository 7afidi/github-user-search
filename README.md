# GitHub User Search

This is a simple React app that allows you to search for GitHub users by username and displays their name, profile picture, and number of followers and following. The app uses the GitHub API, Tailwind CSS for styling, and is hosted on Firebase.

## Demo

You can try out the app at https://react-github-api-d035d.web.app/.



## Installation

To install the app locally, follow these steps:

1 - Clone the repository to your local machine.

```git
git clone https://github.com/7afidi/github-user-search.git
```

2 - Navigate to the project directory.

```git
cd github-user-search
```
3 - Install the dependencies.

```
npm install
```
4 - Start the development server.

```
npm run start
```
The app will be available at http://localhost:3000.


## Usage
To use the app, simply enter a GitHub username into the search bar and click the Enter. The app will display the user's name, profile picture, and number of followers and following.

## Deployment
To deploy the app to Firebase, follow these steps:

1 - Build the app for production.

```
npm run build
```

2 - Install the Firebase CLI.
```
npm install -g firebase-tools
```

3 - Initialize a new Firebase project.

```
firebase init
```

4 - Deploy the app to Firebase hosting.
```
firebase deploy
```

## Acknowledgements
* [GitHub API](https://docs.github.com/en/rest/)
* [Tailwind CSS](https://tailwindcss.com)
