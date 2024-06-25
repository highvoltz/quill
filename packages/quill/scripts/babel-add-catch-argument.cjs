module.exports = function ({ types: t }) {
  return {
    visitor: {
      CatchClause(path) {
        if (!path.node.param) {
          // Add a default parameter to the catch clause
          path.node.param = t.identifier('e');
        }
      },
    },
  };
};