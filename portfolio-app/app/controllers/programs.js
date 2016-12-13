import Ember from 'ember';

export default Ember.Controller.extend({
  basicTabsSelection: null,
  basicTabsContent: null,
  
  keyObserver: function() {
    var currentTab = this.get('basicTabsSelection');
    switch (currentTab) {
      case 'c':
        this.transitionToRoute('programs.c');
      break;
      case 'java':
        this.transitionToRoute('programs.java');
      break;
    }
  }.observes('basicTabsSelection'),
  
  setupController: function() {
    var dataArray = [ 
      {id: 'c', title: 'C/C++'},
      {id: 'java', title: 'Java'}
    ];
    
    this.set('basicTabsContent', dataArray);
    this.set('basicTabsSelection', 'c');
  }
}); 
