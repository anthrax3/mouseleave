var assert = require('assert');
var synth = require('synthetic-dom-events');
var mouseleave = require('../');

var html = '<ul><li>item 1</li><li>item 2</li><li>item 3</li></ul>';

test('should trigger on mouseleave', function(done) {
    var div = document.createElement('div');
    mouseleave(div, function (ev) {
        done();
    });

    var ev = synth('mouseout');
    div.dispatchEvent(ev);
});

test('should trigger once for nested mouseovers', function(done) {
    var div = document.createElement('div');
    div.innerHTML = html;
    var ul = div.children[0];
    var li1 = ul.querySelectorAll('li')[0];
    var li2 = ul.querySelectorAll('li')[1];

    var count = 0;

    mouseleave(ul, function (ev) {
        count++;
    });

    var ev = synth('mouseout');
    ul.dispatchEvent(ev);
    var ev = synth('mouseout', { relatedTarget: li1 });
    ul.dispatchEvent(ev);

    assert.equal(count, 1);
    done();
});

test('should properly unbind', function(done) {
    var div = document.createElement('div');
    var count = 0;
    function fn() {
        count++;
    };
    var unbind = mouseleave(div, fn);

    var ev = synth('mouseout');
    div.dispatchEvent(ev);
    unbind();
    div.dispatchEvent(ev);

    assert.equal(count, 1);
    done();
});
