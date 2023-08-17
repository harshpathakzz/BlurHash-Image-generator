# BlurHash-Image-Generator

## Introduction

BlurHash-Image-Generator is a web application that demonstrates the usage of BlurHash, an algorithm developed by Wolt, to create visually appealing image placeholders that load quickly while actual images are being fetched. This project utilizes the blurha.sh JavaScript encoder and decoder for BlurHash.

## What is BlurHash?

BlurHash is a compact string representation of an image's colors and distribution. It combines data compression and perceptual hashing to create attractive placeholders. These placeholders can be displayed while the real image is loading, enhancing the user experience by providing a visual preview.

## Features

- Decode BlurHash strings into images.
- Encode pixel data into BlurHash strings.
- Validate the correctness of BlurHash strings.
- Create a blurred version of an image using BlurHash.
- Build a reusable React component for displaying blurred images.

## Getting Started

1. Make sure you have Node.js and npm (Node Package Manager) installed on your system.

2. Clone or download this repository to your local machine.

3. Navigate to the project directory using your terminal or command prompt.

4. Install the required dependencies using the following command:

   ```bash
   yarn install
   ```

5. Run the application locally:

   ```bash
   yarn start
   ```

6. Open your web browser and visit `http://localhost:3000` to see the BlurHash-Image-Generator in action.

## Usage

The BlurHash-Image-Generator allows you to:

- Decode BlurHash strings into images.
- Encode pixel data into BlurHash strings.
- Validate the correctness of BlurHash strings.
- Create a blurred version of an image using BlurHash.

## Example Usage

### Decoding a BlurHash

```javascript
import { decode } from "blurhash";

const pixels = decode("LEHV6nWB2yk8pyo0adR*.7kCMdnj", 32, 32);

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const imageData = ctx.createImageData(width, height);
imageData.data.set(pixels);
ctx.putImageData(imageData, 0, 0);
document.body.append(canvas);
```

### Encoding Pixels to a BlurHash

```javascript
import { encode } from "blurhash";

// Load an image and extract its pixel data
const loadImage = async (src) => {
  // ...
};

// Get image data
const getImageData = (image) => {
  // ...
};

// Encode image data into a BlurHash string
const encodeImageToBlurhash = async (imageUrl) => {
  // ...
};
```

### Building a Blurred Image Component in React

```javascript
import { useState, useEffect } from "react";
import { decode } from "blurhash";

const BlurredImage = ({ imageUrl, blurhash, width, height }) => {
  // ...
};

export default BlurredImage;
```

## Conclusion

BlurHash is a powerful technique for displaying visually appealing image placeholders while improving loading times. BlurHash-Image-Generator, powered by blurha.sh, makes it easy to integrate BlurHash into your web projects. Experiment with decoding, encoding, validating, and creating custom blurred image components using this comprehensive API.

Start enhancing your web applications with beautiful and efficient image placeholders today!

## Demo

Explore the live demo of the BlurHash-Image-Generator: [BlurHash-Image-Generator Demo](https://stackblitz.com/github/harshpathakzz/BlurHash-Image-generator?file=package.json)

---

Feel free to update and modify this Readme file to fit your specific project details and needs.
