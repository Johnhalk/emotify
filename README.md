# [Emotify] (https://emotify-ma.herokuapp.com/)

![Imgur](http://imgur.com/yDt4N0y.png)

### Your go-to for presentations [GET THE TAG LINE]



## Core Features

  - App activates webcam
  - Photographs taken based on interval set
  - Emotions analysed
  - Handles multiple faces in photo
  - Plots emotions on spider diagram
  - Real-time plotting and emotion analysis on time-series graph
  - Hardware integration - light colour changes depending on emotional state
  - Mobile optimisation

## User Stories

```

As a user,
I want to upload a photo of 1 person,
So that I can analyse it

As a user,
I want my photo to be analysed of 1 person,
So that I can find out an emotion score

As a user,
I want my analysed emotion picture to be displayed in a graph,
So that it is easy to understand

As a user,
I want to upload a photo of multiple people,
So that I can analyse it

As a user,
I want my photo to be analysed of multiple people,
So that I can find out an emotion score

As a user,
I want to use my webcam to take the pictures,
So that is is relevant live data

As a user,
I want a picture to be taken from my webcam every 10 seconds,
So that I can have real-time data

As a user,
I want my analysed crowd to be displayed in a positive index graph,
So that I can track developments in positive emotion over time

```

## Dependency Overview

![Imgur](http://imgur.com/yVX16Uc.png)

## Technologies and Dependencies

**Core**
- React
- JavaScript

**Emotional Analysis**
- MCS Cognitive API

**Data Visualisation**
- LIFX
- Chart.js
- React-chart

**Styling**
- HTML/CSS

**Testing**
- Jest
- Enzyme

Deployed to [Heroku](https://emotify-ma.herokuapp.com/)  

## Installation and Usage

- Clone this repo
- Run 'npm install' in project root directory
- Run 'npm start' to run the local server
- Open 'http://localhost:3000' to view app

Or you can experience this [online](https://emotify-ma.herokuapp.com/)

## Testing

- You can run the tests through 'npm test' in project root directory
- See the coverage by 'npm test -- --coverage' in project root directory

## Dependencies
