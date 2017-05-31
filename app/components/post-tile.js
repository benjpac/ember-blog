import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update3(post, params) {
      this.sendAction('update4', post, params);
    },
    delete3(post) {
      this.sendAction('delete4', post);
    }
  }
});
