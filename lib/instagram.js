export const getInstagramPosts = async (numPosts) => {
  const userId = process.env.IG_USER_ID;
  const userToken = process.env.IG_USER_TOKEN;

  if (userId && userToken) {
    const url = `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,permalink&access_token=${userToken}`;
    const response = await fetch(url);
    const { data } = await response.json();
    const filteredImages = data.filter(
      (post) =>
        post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM"
    );

    return filteredImages && filteredImages.length > numPosts
      ? filteredImages.slice(0, numPosts)
      : filteredImages;
  }

  return null;
};
