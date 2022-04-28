export const getContentfulImageDataFromArray = (contentfulImageArray) => {
  return contentfulImageArray.map((contentfulImage) => getContentfulImageData(contentfulImage));
};

export const getContentfulImageData = (contentfulImage) => {
  return {
    url: contentfulImage.fields.file.url,
    title: contentfulImage.fields.title,
  };
};

export const chunkArrayInGroups = (arr, size) => {
  let result = [];
  let pos = 0;

  while (pos < arr.length) {
    result.push(arr.slice(pos, pos + size));
    pos += size;
  }

  return result;
};
