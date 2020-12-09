# Event tracker app written in React

![App Screenshot](/public/screenshot.png)

## Based on the Traversy Media Wildfire Tracker App from

[This YouTube video](https://youtu.be/ontX4zfVqK8)

## Uses

- The NASA EONET API (Earth Observatory Natural Event Tracker)
- The Google Maps API
- Iconify icons

## Additions to app presented in video

- Selected event icon becomes highlighted and/or larger when selected and added a close info box button

- Created an outside config.json containing API keys and URLs (see sample-config.json)

- Added "click ouside" functionality using React useRef to make the highlighted event return to it's normal state and close the info box if the user clicks outside the selected event icon

- Added additional event types (beyond wildfires) and did so using a JSON lookup table containing each event type info so that additional event types can be added to the app easily by adding another record to the object

- Replaced the gif loading spinner with an npm package called react-loader-spinner to make the spinner configurable
