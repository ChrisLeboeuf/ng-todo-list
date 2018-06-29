app.component('todoList', {
  controller: function() {
    const todo = this;
    todo.input = 'Hey class';
    todo.list = [
      'Buy wine',
      'Drink wine',
      'Cry',
    ];
    todo.add = function(listItem) {
      todo.list.push(listItem);
      todo.input = '';
    };

    todo.test = function(input) {
      console.log('Hey I made it!', input );
    };
  },
  controllerAs: 'todo',
  templateUrl: '../templates/todo-list.html',
});