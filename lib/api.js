const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getPages = () => {
  return client
    .getEntries({
      content_type: "page",
    })
    .then((response) =>
      response.items && response.items.length ? response.items : null
    )
    .catch(console.error);
};

export const getPageBySlug = (slug) => {
  return client
    .getEntries({
      content_type: "page",
      "fields.slug": slug,
    })
    .then((response) =>
      response.items && response.items.length ? response.items[0] : null
    )
    .catch(console.error);
};
