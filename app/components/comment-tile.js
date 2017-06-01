import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateComment3(params) {
      this.sendAction('updateComment4', params);
    },
    deleteComment3(comment) {
      this.sendAction('deleteComment4', comment);
    }
  }
});
