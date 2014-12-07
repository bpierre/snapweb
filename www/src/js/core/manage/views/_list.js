YUI.add('core-manage-view-snaplist', function(Y) {

  var template = new Y.Template();
  template = template.revive(Y.DEMO.CORE.MANAGE.TMPL.LIST.template);

  SnapListView = Y.Base.create('snapListView', Y.View, [], {

    containerTemplate: '<nav class=layout-app-nav-primary></nav>',

    template: template,

    render: function() {
      // XXX filter out snappyd
      this.set('snapList',
        Y.Array.filter(this.get('snapList'), function(item, i) {
          if (item.name !== 'snappyd') {
            return true;
          }
        }));

      var content = this.template(this.get('snapList'));
      this.get('container').setHTML(content);

      return this;
    }
  });

}, '0.0.1', {
  requires: [
    'view',
    'template'
  ]
});
