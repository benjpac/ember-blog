import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update3(post, params) {
      this.sendAction('update4', post, params);
    },
    delete3(post) {
      this.sendAction('delete4', post);
    },
    saveComment3(post, params) {
      this.sendAction('saveComment4', post, params);
    },
    updateComment5(params) {
      this.sendAction('updateComment6', params);
    },
    deleteComment5(comment) {
      this.sendAction('deleteComment6', comment);
    }
  }
});
