app.component('listItem', {
  bindings: {
    content: '<',
  },
  controller: function() {
    const item = this;
    // item.content = 'Something!';
  },
  controllerAs: 'item',
  templateUrl: '/templates/list-item.html',
});