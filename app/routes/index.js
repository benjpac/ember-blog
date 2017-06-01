import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      // posts: this.store.findAll('post'),
      posts: this.store.query('post',{
        // orderByValue: 'created',
        // limitToFirst: 5
      // }),
    }).then((test)=>{
        return test.toArray().reverse();
     }),
      comments: this.store.findAll('comment')
    });
  },
  actions: {
    savePost3(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    update5(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    delete5(post) {
      post.destroyRecord();
      // this.transitionTo('index');
    },
    saveComment5(post, params) {
      var newComment = this.store.createRecord('comment', params);
      // var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        post.save();
      });
      this.transitionTo('index');
    },
    updateComment7(params) {
      var post = params.post;
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    deleteComment7(comment) {
      comment.destroyRecord();
      // this.transitionTo('index');
    },

  }
});
