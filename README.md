# WebXDownloader

Fork of WebXDownloader for downloading Cisco Webex recordings, updated for Chrome Manifest V3 compatibility.

## Overview

This project is a maintained and updated version of the original WebXDownloader extension.  
It allows users to download Cisco Webex meeting recordings and access recording-related resources directly from supported Webex pages.

## Features

- Download Cisco Webex recordings directly from the playback page
- Access the direct stream URL from the extension popup
- Download chat transcripts when available
- Updated to support Chrome extensions using Manifest V3

## Project Structure

- `manifest.json` — extension manifest
- `background.js` — background service worker
- `content.js` — content script injected into Webex pages
- `popup.html` — popup interface
- `popup.js` — popup logic
- `options.js` — local option handling
- `icon.png` — extension icon
- `image.png` — popup illustration

## Installation

1. Clone or download this repository
2. Open `chrome://extensions`
3. Enable Developer mode
4. Click `Load unpacked`
5. Select the project folder

## Notes

This extension depends on the current structure of Cisco Webex recording pages.  
If Webex changes internal endpoints, request headers, or DOM structure, some features may stop working and require further updates.

## Credits

Based on the original [WebXDownloader](https://github.com/jacopo-j/WebXDownloader) project by jacopo-j.

## License

This project is distributed under the MIT License.  
See the `LICENSE` file for details.
