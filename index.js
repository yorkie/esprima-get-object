
function getObject (tree) {
  'use strict';
  const property = tree.property.name;
  const objectType = tree.object.type;
  if (objectType === 'Identifier') {
    return tree.object.name + '.' + property;
  } else if (objectType === 'MemberExpression') {
    return getObject(tree.object) + '.' + property;
  }
}

module.exports = getObject;
