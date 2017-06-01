import Ember from 'ember';

export default Ember.Component.extend({
    addNewComment: false,
    actions: {
        commentFormShow() {
            this.set('addNewComment', true);
        },
        saveComment1(post) {
        var params = {
            content: this.get('content'),
            author: this.get('author'),
        };
        this.set('addNewComment', false);
        this.sendAction('saveComment2', post, params);
        }
    }
});
