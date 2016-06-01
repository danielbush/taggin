'use strict';
const expect = require('chai').expect;
const tag = require('../index');

describe('taggin', function () {

  describe('tag.make', function () {

    it('can create a div tag with content', function () {
      let div = tag.make('div');
      expect(div('some text')).to.equal('<div>some text</div>');
    });

  });

});
