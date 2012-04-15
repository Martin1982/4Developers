Ext.define('4Developers.view.Schedule', {
    extend: 'Ext.dataview.List',
    xtype: 'schedule',

    config: {
        store: 'Schedule',
        itemTpl:"{title} - {speaker}"
    }
});
