const buildEvent = require('../lib/logasm/event');

describe('buildEvent', function() {
  it('adds application name', () => {
    const attributes = {};
    const serviceName = 'service-name';
    const event = buildEvent(attributes, serviceName);
    expect(event.application).to.eql(serviceName);
  });
});
