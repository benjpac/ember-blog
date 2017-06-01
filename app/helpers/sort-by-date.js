import Ember from 'ember';

export function sortByDate(hash) {
  var sortBy = hash[1]
  var order = hash[2]
  var normalOrder = hash[0][sortBy]
  var byDate = normalOrder.content.sort(function(a,b) {
    var testing = (new Date(a._data.created) - new Date(b._data.created))
    debugger;
    return testing
  })
  // debugger
  // return reversed;
}

export default Ember.Helper.helper(sortByDate);

// var r = normalOrder.content.reverse()
// normalOrder.content.length
// normalOrder.content[0]._data.created
