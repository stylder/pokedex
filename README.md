<div align="center">

<a href="https://github.com/stylder/pokedex">
    <img src="assets/header/logo.png" width="600" alt="Pokedex" />
</a>





---

<h3>
    <a href="#get-pokedex"><b>Get Pokedex</b></a> &bull;
    <a href="#setup"><b>Setup</b></a> &bull;
    <a href="#run-locally"><b>Run Locally</b></a> &bull;
    <a href="#build"><b>Build</b></a> &bull;
    <a href="#troubleshooting"><b>Troubleshooting</b></a>
</h3>

</div>


## :star: Features
|   | Pokedex |
| - | ------------ |
| 😎 | **Lazy loaded**. Only load data when you need it |
| 🔄 | **Offline-first.** [Sync](https://github.com/PokeAPI/pokedex-promise-v2) Node Server-side with auto caching |
| 📱 | **Multiplatform**. iOS and Android |
| ⚛️ | **i18n.** Easily plug locales into components |
| ✨ | **Code Style.** ESLint rules! |
| ✅ | **Unit/integration test.** Powered by [Travis](https://travis-ci.org/github/stylder/pokedex) |



## Get Pokedex
<table>
    <thead>
        <tr align="center">
            <th width=300>iOS</th>
            <th width=300>Android</th>
        </tr>
    </thead>
    <tbody>
        <tr align="center">
            <td>[Testflight (Comming Soon)](https://testflight.apple.com/join/)</td>
            <td>[Play Store  (Comming Soon)](https://play.google.com/store/search?q=pokedex&c=apps)  &bull;  
            [APK](https://github.com/stylder/pokedex/-/pipelines)</td>
        </tr>
    </tbody>
</table>


## Setup

### Prerequisites

<table>
    <thead>
        <tr align="center">
            <th width=300>iOS</th>
            <th width=300>Android</th>
        </tr>
    </thead>
    <tbody>
        <tr align="center">
            <td colspan=2>[Node.js](https://nodejs.org/)</td>
        </tr>
        <tr align="center">
            <td colspan=2>[Yarn](https://yarnpkg.com/)</td>
        </tr>
        <tr align="center">
            <td colspan=2>[Watchman](https://facebook.github.io/watchman/) (only for development)</td>
        </tr>
        <tr align="center">
            <td>XCode Command Line Tools</td>
            <td>Android Studio and the Android SDK</td>
        </tr>
    </tbody>
</table>

### Procedure

<table>
    <thead>
        <tr align="center">
            <th width=40></th>
            <th width=280>iOS</th>
            <th width=280>Android</th>
        </tr>
    </thead>
    <tbody>
        <tr align="center">
            <td>1</td>
            <td colspan=2>Clone the project<br /><i>Note: If you want to work on the latest stable version, checkout the latest tag</td>
        </tr>
        <tr align="center">
            <td>2</td>
            <td colspan=2>[Set up additional features if needed](#additional-steps)</td>
        </tr>
        <tr align="center">
            <td>3</td>
            <td colspan=2>Run <code>yarn</code> in root directory</td>
        </tr>
        <tr align="center">
            <td>4</td>
            <td width=280>In root directory, run:<br /><code>cd ios && pod install && cd ..</code></td>
            <td width=280>N/A</td>
        </tr>
    </tbody>
</table>



## Run Locally

<table>
    <thead>
        <tr align="center">
            <th width=40></th>
            <th width=280>iOS</th>
            <th width=280>Android</th>
        </tr>
    </thead>
    <tbody>
        <tr align="center">
            <td>1</td>
            <td colspan=2>[Set up the project](#setup)</td>
        </tr>
        <tr align="center">
            <td>2</td>
            <td colspan=2>Run <code>yarn start</code></td>
        </tr>
        <tr align="center">
            <td>3</td>
            <td colspan=2>Open another terminal</td>
        </tr>
        <tr align="center">
            <td rowspan=2>4</td>
            <td rowspan=2>Run <code>yarn ios</code><br /><i>Note: <code>yarn ios</code> runs iPhone 11 Pro by default - you may need to [change this](https://facebook.github.io/react-native/docs/running-on-simulator-ios#specifying-a-device) depending on what simulators you have installed.</i></td>
            <td>[Launch an Android virtual device](https://developer.android.com/studio/run/emulator) or [connect an Android device with adb](https://developer.android.com/studio/run/device)</td>
        </tr>
        <tr align="center">
            <td>Run <code>yarn android</code></td>
        </tr>
    </tbody>
</table>


## Build

### Steps to Run

<table>
    <thead>
        <tr align="center">
            <th width=40></th>
            <th width=280>iOS</th>
            <th width=280>Android</th>
        </tr>
    </thead>
    <tbody>
        <tr align="center">
            <td>1</td>
            <td colspan=2>[Set up the project](#setup)</td>
        </tr>
        <tr align="center">
            <td>2</td>
            <td colspan=2>Run <code>yarn convert</code></td>
        </tr>
        <tr align="center">
            <td rowspan=4>3</td>
            <td rowspan=4>[Run the app on a device](https://help.apple.com/xcode/mac/current/#/)</td>
            <td><b>Graphical</b></td>
        </tr>
        <tr align="center">
            <td>Launch Android Studio and open the <code>android</code> folder<br />Select <code>Build</code> > <code>Generate Signed Bundle / APK…</code> and follow the dialogs</td>
        </tr>
        <tr align="center">
            <td><b>Command Line</b></td>
        </tr>
        <tr align="center">
            <td><code>cd android</code><br />and<br /><code>./gradlew assembleRelease</code><br /><i>Note: You will need to [sign your app](https://developer.android.com/studio/publish/app-signing) to be able to install it on your device</td>
        </tr>
    </tbody>
</table>


## TODO:
 - Setup Travis