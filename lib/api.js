import { contentfulContentIds } from "./constants";
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENT_ENV,
});
const previewClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  environment: process.env.CONTENT_ENV,
  host: "preview.contentful.com",
});

export const getPages = (isPreview) => {
  if (isPreview) {
    return previewClient
      .getEntries({
        content_type: "page",
      })
      .then((response) =>
        response.items && response.items.length ? response.items : null
      )
      .catch(console.error);
  }

  return client
    .getEntries({
      content_type: "page",
    })
    .then((response) =>
      response.items && response.items.length ? response.items : null
    )
    .catch(console.error);
};

export const getPageBySlug = (slug, isPreview) => {
  if (isPreview) {
    return previewClient
      .getEntries({
        content_type: "page",
        "fields.slug": slug,
      })
      .then((response) => {
        return response.items && response.items.length
          ? response.items[0]
          : null;
      })
      .catch(console.error);
  }

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

export const getHomepage = (isPreview) => {
  if (isPreview) {
    return previewClient
      .getEntries({
        content_type: "homePage",
      })
      .then((response) => {
        console.log("response from contentful", response);

        return response.items && response.items.length
          ? response.items[0]
          : null;
      })
      .catch(console.error);
  }

  return client
    .getEntries({
      content_type: "homePage",
    })
    .then((response) =>
      response.items && response.items.length ? response.items[0] : null
    )
    .catch(console.error);
};

export const getPageNavigation = (isPreview) => {
  if (isPreview) {
    return previewClient
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
  }

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

export const getClientsForLifePages = (isPreview) => {
  if (isPreview) {
    return previewClient
      .getEntries({
        content_type: "clientForLifePage",
      })
      .then((response) =>
        response.items && response.items.length ? response.items : null
      )
      .catch(console.error);
  }

  return client
    .getEntries({
      content_type: "clientForLifePage",
    })
    .then((response) =>
      response.items && response.items.length ? response.items : null
    )
    .catch(console.error);
};

export const getClientForLifePageBySlug = async (slug, isPreview) => {
  if (isPreview) {
    const response = await previewClient.getEntries({
      content_type: "clientForLifePage",
    });
    const pages = response.items ? response.items : null;
    const navigation = pages.map((page) => ({
      text: page?.fields?.navText,
      slug: page?.fields?.slug,
    }));

    return previewClient
      .getEntries({
        content_type: "clientForLifePage",
        "fields.slug": slug,
      })
      .then((response) => ({
        page:
          response.items && response.items.length ? response.items[0] : null,
        navigation,
      }))
      .catch(console.error);
  }

  const response = await client.getEntries({
    content_type: "clientForLifePage",
  });
  const pages = response.items ? response.items : null;
  const navigation = pages.map((page) => ({
    text: page?.fields?.navText,
    slug: page?.fields?.slug,
  }));

  return client
    .getEntries({
      content_type: "clientForLifePage",
      "fields.slug": slug,
    })
    .then((response) => ({
      page: response.items && response.items.length ? response.items[0] : null,
      navigation,
    }))
    .catch(console.error);
};
