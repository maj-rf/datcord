# Project: Datcord - A Discord Clone

![Imgur](https://i.imgur.com/zlSAMWu.png)

## Features and Functionalites

A Social Media Messaging App which features some of the core functionalities of Discord.

- Register to gain access to the app.
- Join a single test server consisting of authenticated users.
- Create channels inside the server.
- Talk via text on each created channels
- Check users who are online/offline.
- Update your Profile
- Log-in/Log-out

## Objectives and Outcomes

This is my 2nd Full Stack app made after the Photo-Tagging App. I got to learn more and be better at using Firebase. This is my last project before I delve into the Backend stuff.

Some of the hurdles along the way:

1. Routing with `react-router-dom`. I had to figure out nested routing. Clicking one of the `channels` should only re-render/route to the `ChatPanel` component that corresponds to the channel. Thankfully, the docs were enough. Got to use `Outlet` and `useOutletContext`. Pretty nice!

2. Authentication. It was a bit hard for me since Firebase docs for me isn't clear enough. I learned how to make an `AuthContextProvider` that consists of all the Auth actions like `login` or `logout`. Also learned more about Firestore rules.

3. Talking to the Database (`Firestore`). Was really nice playing with all the Firebase Store actions like `onSnapshot`, `getDocs`, etc. Not as hard as the Auth.

4. User Interface. `CSS` will always be my final boss. The mobile view isn't 100% responsive yet.

## Usage / Running the Project Locally.

1. Clone the repository. (`git clone ...`)
2. Install/Update `node_modules` in the project directory. (`npm install`)
3. Create a Firebase Web App in Google Firebase.
4. Copy the configs into `firebase-config.js`.
5. Run the app. (`npm start`)

## Development

Made with mainly ReactJS and bootsrapped with `create-react-app`.

- React / CRA
- `styled-components`
- `react-router-dom` for routing pages.
- `Google Firebase` as backend.
- `Jest` for testing.
- `react-testing-library` for testing.
- `unique-names-generator` to randomly create usernames.
- `styled-icons` for the awesome icons.

## Future Updates

-[] Implement changing display/profile picture.
-[] UI/UX improvements especially on mobile.
-[] Performance updates.
-[] More testing!
