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

    it('can set a both an id and a class using array-string format', function () {
      let div = tag.make('div');
      expect(div(['#def.abc'], 'some text'))
        .to.equal('<div id="def" class="abc">some text</div>');
    });

    it('can set multiple classes', function () {
      let div = tag.make('div');
      expect(div(['.def.abc'], 'some text'))
        .to.equal('<div class="def abc">some text</div>');
    });

    context('multiple ids', function () {

      it('will complain if multiple ids', function () {
        let div = tag.make('div');
        expect(() => div(['#def#abc'], 'some text'))
          .to.throw(/more than one id/i);
      });

      it('will handle multiple ids 1', function () {
        let div = tag.make('div');
        expect(() => div(['.abc#def#abc'], 'some text'))
          .to.throw(/more than one id/i);
      });

    });

    it('treats leading non-dot as class', function () {
      let div = tag.make('div');
      expect(div(['def'], 'some text'))
        .to.equal('<div class="def">some text</div>');
    });

    it('can set attributes using object literal format', function () {
      let div = tag.make('div');
      expect(div({ style: 'font-weight: bold;' }, 'some text'))
        .to.equal('<div style="font-weight: bold;">some text</div>');
    });

    it('can put the object literal to the back', function () {
      let div = tag.make('div');
      expect(div('some text', { style: 'font-weight: bold;' }))
        .to.equal('<div style="font-weight: bold;">some text</div>');
    });

  });

});
