import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'kanban-ember/tests/helpers/start-app';

module('Acceptance | visit analysis', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /analysis', function(assert) {
  visit('/analysis');

  andThen(function() {
    assert.equal(currentURL(), '/analysis');
  });
});
