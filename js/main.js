// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',
  methods: {
    addItem () {
      this.items.push({
        title: this.titleInput,
        content: this.contentInput
      })
      this.titleInput = '',
      this.contentInput = ''
    },
    addTitle (t){
      return `${t.title}`;
    },
    addContent (c){
      return `${c.content}`;
    },
    removeItem (i){
      var index = this.items.indexOf(i);
      this.items.splice(index, 1);
    },
    cancel() {
      this.titleInput = '';
      this.contentInput = '';
    }
  },
  data: {
    titleInput: '',
    contentInput: '',
    items: [
      {
        title: 'Sample To Do Item',
        content: 'Do Stuff'
      }
    ]
  },
});
