import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addPost() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        author: this.get('author'),
      };
      console.log(params);
      var newPost = this.store.createRecord('post', params);
      console.log(newPost);
      newPost.save();
      this.transitionTo('posts');
    }
  }
});
