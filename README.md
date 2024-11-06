# NetInfo Refresh Bug Demo

A minimal reproduction app demonstrating issues with `@react-native-community/netinfo`'s refresh functionality in React Native.

## Description

This app provides a simple interface to demonstrate how NetInfo handles internet reachability checks. It includes:

- Real-time display of internet connection status
- Manual refresh button to test NetInfo's refresh functionality
- Custom NetInfo configuration with intentionally failing reachability URL

## Setup

### Prerequisites

- Node.js
- Expo CLI
- iOS Simulator or Android Emulator (for mobile testing)

### Installation

1. Clone the repository
2. Install dependencies:

Add to Chat⇧⌘L
Add to Composer⌘I
⌘K to generate a command
Add to Chat⇧⌘L
Add to Composer⌘I
Debug with AI⌥D
⌘K to generate a command
write read me

Final Codebase Context
I'll help you write a README.md for your NetInfo Refresh Bug Demo project. Based on the code provided, this appears to be a demonstration app showing an issue with NetInfo's refresh functionality in React Native.
README.md

# NetInfo Refresh Bug Demo

A minimal reproduction app demonstrating issues with `@react-native-community/netinfo`'s refresh functionality in React Native.

## Description

This app provides a simple interface to demonstrate how NetInfo handles internet reachability checks. It includes:

- Real-time display of internet connection status
- Manual refresh button to test NetInfo's refresh functionality
- Custom NetInfo configuration with intentionally failing reachability URL

## Setup

### Prerequisites

- Node.js
- Expo CLI
- iOS Simulator or Android Emulator (for mobile testing)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
yarn
```

### Running the App

Start the Expo development server:

```bash
yarn start
```

Then choose your platform:

- Press `i` for iOS
- Press `a` for Android

## Technical Details

The app uses the following configuration for NetInfo:

- Reachability URL: `https://example.com/fail` (intentionally failing)
- Reachability timeout: 30 seconds
- Request timeout: 1 second
- Native reachability: Disabled
- HTTP method: GET

## Dependencies

- React Native
- Expo
- @react-native-community/netinfo: 11.3.1

## Bug Reproduction Steps

1. Launch the app
2. Observe the initial connection status
3. Press the "NetInfo.refresh()" button
4. Notice the behavior of the connection status indicator briefly turning green

## Project Structure

- `App.js`: Main application component with NetInfo implementation
- `app.json`: Expo configuration
- `package.json`: Project dependencies and scripts

## License

This project is open-source and available under the MIT License.
