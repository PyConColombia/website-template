/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);
  // You can access the variable "locale" in your page queries now
  createPage({
    ...page,
    context: {
      ...page.context,
      locale: page.context.intl.language,
      defaultLocale: page.context.intl.defaultLanguage,
    },
  });
};

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allSpeakersJson {
        nodes {
          description
          id
          image
          name
          price
        }
      }
    }
  `);

  data.allSpeakersJson.nodes.forEach((node) => {
    actions.createPage({
      path: `/speakers/${node.id}`,
      component: require.resolve(`./src/templates/speaker.js`),
      context: { speakerID: node.id },
    });
  });
};
