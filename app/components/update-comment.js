import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    updateComment1(post) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        post: this.get('post')
      };
      this.set('updateCommentForm', false);
      this.sendAction('updateComment2', post, params);
    },
    deleteComment1(comment) {
      if(confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('deleteComment2', comment);
      }
    }
  }
});
