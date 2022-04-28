export const getInstagramPosts = async (numPosts) => {
  const userId = process.env.IG_USER_ID;
  const userToken = process.env.IG_USER_TOKEN;

  if (userId && userToken) {
    console.info("tokens acquired, making call");
    const url = `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,permalink&access_token=${userToken}`;
    const response = await fetch(url);

    if (response.status >= 200 && response.status < 299) {
      console.info("instagram images fetched");

      const { data } = await response.json();
      const filteredImages = data.filter(
        (post) =>
          post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM"
      );

      return filteredImages && filteredImages.length > numPosts
        ? filteredImages.slice(0, numPosts)
        : filteredImages;
    } else {
      console.error("error fetching instagram images");
      console.error(response.status, response.statusText);

      return null;
    }
  }

  return null;
};
