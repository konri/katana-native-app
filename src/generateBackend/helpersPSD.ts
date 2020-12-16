const { createCanvas, Image } = require('canvas');
const fs = require('fs');
const pathLib = require('path');
const os = require('os');

const SUPPORT_IMAGE_EXTENSIONS = ['.png'];
const { writePsdBuffer, readPsd, initializeCanvas } = require('ag-psd');

export const getFilesName = function (path) {
  return fs.readdirSync(path);
};

export const getImageFileName = function (path) {
  return fs
    .readdirSync(path)
    .filter((fileName) =>
      SUPPORT_IMAGE_EXTENSIONS.includes(pathLib.extname(fileName))
    );
};

export const parseFileName = function (fileName) {
  const [imageFile, extension] = fileName.split('.');
  const num = imageFile.match(/\d+/g);
  const letr = imageFile.match(/[a-zA-Z]+/g);

  if (num.length === 1) {
    return {
      extension,
      sequence: num[0],
      name: letr[0],
    };
  }
  if (num.length === 2) {
    return {
      extension,
      sequence: num[1],
      prefixNum: num[0],
      name: letr[0],
    };
  }
  throw new Error('No sequence number');
};

export const getOutputNameFromPath = function (path) {
  const splitDirectory = os.type() === 'Windows_NT' ? '\\' : '/';
  console.log('type:', os.type());
  console.log(splitDirectory);
  const split = path.split(splitDirectory);
  return split[split.length - 1];
};

export const createNameFromSequence = function (
  name,
  sequence,
  extension,
  prefixNum = ''
) {
  return `${prefixNum}${name}${sequence}.${extension}`;
};

export const getImagesFromPath = function (filePaths) {
  return filePaths.map((filePath) => {
    const img = new Image();
    img.src = fs.readFileSync(filePath);
    return img;
  });
};

export const getImageDimensions = function (images) {
  if (images.length === 0) {
    throw new Error('empty images');
  }
  const [{ width, height }] = images;
  for (let i = 1; i < images.length; i++) {
    if (images[i].width !== width || images[i].height !== height) {
      throw new Error('Images has different size');
    }
  }
  return {
    width,
    height,
  };
};

export const createFullCanvas = function (images, dimension) {
  const canvas = createCanvas(dimension.width, dimension.height);
  images.forEach((img) => canvas.getContext('2d').drawImage(img, 0, 0));
  return canvas;
};

export const createCanvasFromImage = function (img) {
  const canvas = createCanvas(img.width, img.height);
  canvas.getContext('2d').drawImage(img, 0, 0);
  return canvas;
};

export const generatePsd = function (psdConfig) {
  return writePsdBuffer(psdConfig);
};

export const readPsdFile = function (psdConfig) {
  return readPsd(psdConfig);
};

export const generateAndSavePsdFromConfig = function (psdConfig, outputPath) {
  const buffer = writePsdBuffer(psdConfig);
  fs.writeFileSync(outputPath, buffer);
};

export const generateAndSavePsdFromBuffer = function (buffer, outputPath) {
  fs.writeFileSync(outputPath, buffer);
};
