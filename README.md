# Mobile Walking Tracker

An Expo app that shows your current location and tracks your location during a walk.

## Features

- Shows your current latitude and longitude
- Shows the current tracking status
- Get Current Location button: requests foreground location permission and displays your coordinates
- If location permission is denied, the app shows a message explaining that location access is required to use the tracking features
- Start Walk button: starts location tracking using watchPositionAsync and updates the coordinates as your location changes, and the status changes to Tracking
- Privacy notice on the tracking screen explaining what data is collected, that it is only collected while a walk is being tracked, that records are stored locally on the device, and that tracking can be paused or stopped at any time

## Privacy

This app collects latitude, longitude, date, and time only while a walk is being tracked. Location records are stored locally on your device. You can pause or stop tracking at any time.

## Setup

Install dependencies:

    npm install

Start the app:

    npx expo start

Then open it in Expo Go on your phone, or in an emulator, by scanning the QR code shown in the terminal.

## How to Use

1. Open the walk tracking screen.
2. Tap Get Current Location and allow location permission to see your current latitude and longitude.
3. Tap Start Walk to begin tracking. The status changes to Tracking and the coordinates update as your location changes.

## Testing

| Test | Result |
| --- | --- |
| Location permission approved | Pass |
| Location permission denied, message shown | Pass |
| Get Current Location shows latitude and longitude | Pass |
| Start Walk changes status to Tracking | Pass |
| Coordinates update while tracking | Pass |
| App minimized while tracking | Not run, optional |
| Pause and resume tracking | Not included, optional |
| Stop tracking | Not included, optional |
| App closed and reopened, saved records still there | Not included, optional, saved records were not added |

## Notes

This version covers foreground location tracking. The optional features (background tracking, pause, resume, stop, and locally saved location records) were not included in this version.
