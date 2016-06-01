/*
The files in this directory are part of tagging, a javascript-based library.
Copyright (C) 2016 Daniel Bush
This program is distributed under the terms of the BSD-2-Clause License.
*/

'use strict';

module.exports = {
  make: makeTag
};


function makeTag () {
  return function () {
    return '<div>some text</div>';
  };
}
