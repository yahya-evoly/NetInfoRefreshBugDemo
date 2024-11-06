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
