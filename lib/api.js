import { contentfulContentIds } from "./constants";
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

export const getPageNavigation = () => {
  return client
    .getEntries({
      content_type: "topNavigation",
      "sys.id[in]": `${contentfulContentIds.headerNavigation},${contentfulContentIds.footerNavigation}`,
    })
    .then((response) => {
      const headerNav = response.items.find(
        (item) => item.sys.id === contentfulContentIds.headerNavigation
      );
      const footerNav = response.items.find(
        (item) => item.sys.id === contentfulContentIds.footerNavigation
      );

      return {
        header: headerNav?.fields?.links.map((link) => ({
          text: link?.fields?.text,
          url: link?.fields?.url,
        })),
        footer: footerNav?.fields?.links.map((link) => ({
          text: link?.fields?.text,
          url: link?.fields?.url,
        })),
      };
    })
    .catch(console.error);
};
