# Personal Website Template

This is a stripped-down version of a personal website. It uses modern React with Typescript and Material-UI.
I open-sourced it so that others do not waste too much time on their personal page.

# Getting Started

Go to the directory where you want your project to reside, open a terminal there and type

```
git clone https://github.com/fuzzc0re/website
cd website
npm i
npm start
```

# Generate icons

If you have a logo that you would like to use as a favicon and Progressive Web App starter screen, you can use

```
npm run genicons
```

It uses [imagemagick](https://github.com/ImageMagick/ImageMagick) for the favicons and [pwa-icon-generator](https://github.com/JacobDB/pwa-icon-generator) for the iOS and Android PWA icons.

# Build

In order to build the optimized website for production you press

```
npm run build
```

It uses the [react-scripts](https://github.com/facebook/create-react-app) build script and gzip in order to compress the artifacts that can be compressed (_.js, _.css, _.json, _.html).

# Publish

I have written a publish shell script for websites hosted in AWS s3. It assumes a working installation of [aws2](https://github.com/aws/aws-cli) (instructions for linux and macOS [here](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux-mac.html)). When you have the prerequisites and assuming that you have set the correct AWS region for your s3 bucket in aws2 configuration you press

```
S3_BUCKET_NAME=your.s3.bucker.name ./scripts/s3_publisher.sh
```

# Licence

This project is licensed under the terms described in [LICENCE](LICENCE).
