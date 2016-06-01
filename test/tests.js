'use strict';
const expect = require('chai').expect;
const tag = require('../index');

describe('taggin', function () {

  describe('tag.make', function () {

    it('can create a div tag with content', function () {
      let div = tag.make('div');
      expect(div('some text')).to.equal('<div>some text</div>');
    });

    it('can create a tag with any content', function () {
      let foo = tag.make('foo');
      expect(foo('some more text')).to.equal('<foo>some more text</foo>');
    });

    it('can handle nested tags', function () {
      let div = tag.make('div'),
          em = tag.make('em');
      expect(div('some ' + em('text') + ' here'))
        .to.equal('<div>some <em>text</em> here</div>');
    });

    it('can handle nested tags with commas', function () {
      let div = tag.make('div'),
          em = tag.make('em');
      expect(div('some ', em('text'), ' here'))
        .to.equal('<div>some <em>text</em> here</div>');
    });

    it('can set an id using array-string format', function () {
      let div = tag.make('div');
      expect(div(['#abc'], 'some text'))
        .to.equal('<div id="abc">some text</div>');
    });

    it('can set a class using array-string format', function () {
      let div = tag.make('div');
      expect(div(['.abc'], 'some text'))
        .to.equal('<div class="abc">some text</div>');
    });

  });

});
