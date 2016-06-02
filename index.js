/*
The files in this directory are part of tagging, a javascript-based library.
Copyright (C) 2016 Daniel Bush
This program is distributed under the terms of the BSD-2-Clause License.
*/

'use strict';

module.exports = {
  make: makeTag
};



/**
 * Make a function that returns a tag with content in it.
 *
 * @param {string} tagName - Name of tag.
 * @returns {function} Function that returns Html output.
 */
function makeTag (tagName) {
  return function () {
    let content = '',
        id = null,
        classes = [],
        attrs = [];
    let startTag = null;
    Array.from(arguments).forEach((arg) => {
      if (arg instanceof Array) {
        arg.forEach((arrItem) => {
          if (typeof(arrItem) === 'string') {
            let result = extractIdAndClasses(arrItem);
            id = result.id;
            classes = result.classes;
          }
        });
      }
      else {
        content += arg;
      }
    });
    startTag = makeStartTag(tagName, id, classes, attrs);
    return `<${startTag}>${content}</${tagName}>`;
  };
}

function makeStartTag (tagName, id, classes) {
  if (id) {
    tagName = `${tagName} id="${id}"`;
  }
  if (classes && classes.length > 0) {
    tagName = `${tagName} class="${classes.join(' ')}"`;
  }
  return tagName;
}

function extractIdAndClasses (str) {
  let id = null,
      classes = null,
      removeIdFromString = (str) => {
        let parts = str.split('#');
        if (parts.length > 2) throw new Error('More than one id detected');
        if (parts.length === 2) {
          if (id) throw new Error('More than one id detected');
          id = parts[1];
        }
        return parts[0];
      };

  classes = str
              .split('.')
              .map(c => removeIdFromString(c))
              .filter(c => (c !== ''));
  return { id: id, classes: classes };
}
