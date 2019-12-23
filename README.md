<h1 align="center">
YeApp
</h1>

<p align="center">
    This is an hybrid app developed in React Native you can use to manage your university lectures as a teacher, create a real interaction between you and your students.
</p>

<p align="center">
    <img src="./assets/images/kanyeIcon.png" alt="Kanye logo" />
</p>

---
## Some context

This project was developed during a few months as a school project for ESIEA Gradute School of Engineering : therefore, we had to follow some guidelines.

<img src="./logo-esiea.jpg" alt="Kanye logo" />

---

## Features provided in this version of the app

<ul>
    <li>Get Kanye‘s best quotes from a RESTful open-source API</li>
    <li>Share these quotes with your friends</li>
    <li>Save your favourites quotes on your phone</li>
</ul>

---
## Technologies used

React Native w/ Redux <br />

---

## Architecture of the project

Since Redux was used to develop this project : the true architecture of the project is a bit more complex than that but the closest type of app design we can get to using Redux is a **MVC** architectural pattern : 
<ul>
    <li>Model : these are on a redux-based project the <strong>reducers</strong>, they control the data and set their values</li>
    <li>View : the React Native code of course</li>
    <li>Controller : the <strong>actions</strong>, they dispatch the actions triggered by the users</li>
</ul>