import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  author: DS.attr(),
  created: DS.attr({
    defaultValue(){
      return new Date();
    }
  }),
  comments: DS.hasMany('comment', { async: true })
});
