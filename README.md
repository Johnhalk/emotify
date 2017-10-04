# [Emotify][1]

[![Imgur](http://imgur.com/yDt4N0y.png)][1]

### Transforming your presentations

## Core Features

  - App activates webcam
  - Snapshots taken based on interval set
  - Emotions analysed
  - Plots emotions on spider diagram
  - Handles multiple faces in photo - averages emotions
  - Real-time plotting and emotion analysis on time-series graph
  - Hardware integration - light colour changes depending on emotional state

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

As a user,
I want the light to change colour based on emotion,
So that I can improve my mood
```

## Dependency Overview

![Imgur](http://imgur.com/yVX16Uc.png)

## Technologies and Dependencies

**Core**
- React.js (built with react-scripts)
- Node.js
- JavaScript

**Emotional Analysis**
- MCS Emotion API

**Data Visualisation**
- LIFX
- Chart.js
- React-rt-chart

**Styling**
- CSS
- Bootstrap

**Testing**
- Jest
- Enzyme

Deployed to [Heroku](https://emotify-ma.herokuapp.com/)   **NOTE** MCS API key has since expired on heroku version and hence wont work; suggested you download locally and follow installation and usage instructions below.

## Installation and Usage

- Clone this repo
- Run 'npm install' in project root directory
- Generate MCS API Key from [Microsoft](https://www.microsoft.com/cognitive-services/en-us/emotion-api) and save to a .env file in your root directory
- Run 'npm start' to run the local server
- Open `http://localhost:3000` to view app
- To view colour mode, purchase a LIFX 9W multi-colour bulb, and generate a LIFX API Key from [LIFX](https://api.developer.lifx.com/docs) and save to the .env file in your root

Alternatively you can experience our working setup [online](https://emotify-ma.herokuapp.com/)

## Testing

- You can run the tests through `npm test` in project root directory

[1]: https://emotify-ma.herokuapp.com
