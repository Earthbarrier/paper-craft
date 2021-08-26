import { expect } from 'chai';
import * as sinon from 'sinon';

import { generatePageId, scrollTo } from './scroll';

describe('generatePageId', () => {
  it('returns correct ID when given a number', () => {
    expect(generatePageId(123)).equals('reader_pg_123');
  });

  it('returns correct ID when given a string', () => {
    expect(generatePageId('456')).equals('reader_pg_456');
  });
});

describe('scrollTo', () => {
  it('logs a console error when an element with the given ID does not exist', () => {
    const consoleSpy = sinon.spy(console, 'error');
    scrollTo('doesNotExist');

    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('calls scrollIntoView on the element with the given ID if it exists', () => {
    const div = document.createElement('div');
    div.id = 'testId';
    document.body.appendChild(div);

    const stub = sinon.stub();
    window.HTMLElement.prototype.scrollIntoView = stub;
    scrollTo('testId');

    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith({ behavior: 'smooth', block: 'start', inline: 'center' })).to.be.true;
  });
});
