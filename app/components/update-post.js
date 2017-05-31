import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update1(post) {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        author: this.get('author'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update2', post, params);
    },
    delete1(post) {
      if(confirm('Are you sure you want to delete this post?')) {
        this.sendAction('delete2', post);
      }
    }
  }
});
