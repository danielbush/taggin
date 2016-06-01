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
    let content = '';
    Array.from(arguments).forEach((arg) => {
      content += arg;
    });
    return `<${tagName}>${content}</${tagName}>`;
  };
}
