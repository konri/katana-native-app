import { SelectPathType } from '../store/generation/model/SelectPathType';

const {
  getFilesName,
  getOutputNameFromPath,
  getImageFileName,
  createNameFromSequence,
  parseFileName,
  getImagesFromPath,
  getImageDimensions,
  createFullCanvas,
  createCanvasFromImage,
  generateAndSavePsdFromConfig,
} = require('./helpersPSD');

export const createPSDs = async ({ mainPath, output, layers }) => {
  const mainPathFolers = getFilesName(mainPath);
  const outputName = getOutputNameFromPath(mainPath);
  mainPathFolers.forEach((folderName) => {
    const mainImages = getImageFileName(`${mainPath}/${folderName}`);
    mainImages.forEach((mainImageFile) => {
      const { extension, sequence, prefixNum, name } = parseFileName(
        mainImageFile
      );
      const imagesPathLayer = layers.map(({ type, path, sequencePrefix }) => {
        switch (type) {
          case SelectPathType.singleFile:
            return path;
          case SelectPathType.directory:
            return `${path}/${createNameFromSequence(
              sequencePrefix,
              sequence,
              extension
            )}`;
          case SelectPathType.main:
            return `${path}/${folderName}/${mainImageFile}`;
        }
      });
      console.log(imagesPathLayer);
      const parsedImages = getImagesFromPath(imagesPathLayer);
      const imageDimension = getImageDimensions(parsedImages);
      const fullCanvas = createFullCanvas(parsedImages, imageDimension);
      const { width, height } = imageDimension;
      const children = layers.map((layer, index) => {
        const { name, opacity, blendMode } = layer;
        return {
          name,
          canvas: createCanvasFromImage(parsedImages[index]),
          opacity,
          blendMode: blendMode.value,
        };
      });
      const psd = {
        width,
        height,
        children,
        canvas: fullCanvas,
      };
      const outputFile = `${outputName}${folderName}_${sequence}.psd`;
      console.log(`File: ${outputFile} generated`);
      const outputPath = `${output}/${outputFile}`;
      generateAndSavePsdFromConfig(psd, outputPath);
    });
  });
};
