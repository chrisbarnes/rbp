export const getContentfulImageDataFromArray = (contentfulImageArray) => {
  return contentfulImageArray.map((contentfulImage) =>
    getContentfulImageData(contentfulImage)
  );
};

export const getContentfulImageData = (contentfulImage) => {
  return {
    url: contentfulImage.fields.file.url,
    title: contentfulImage.fields.title,
  };
};
