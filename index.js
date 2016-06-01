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
      classes = [],
      ids = str.split('#');
  if (ids.length >= 2) {
    id = ids[1];
  }
  else { // no id
    classes = str.split('.').filter((c) => c !== '');
  }
  return { id: id, classes: classes };
}
