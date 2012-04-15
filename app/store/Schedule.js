Ext.define('4Developers.store.Schedule', {
    extend: 'Ext.data.Store',

    config: {
        model: '4Developers.model.Talk',
        autoLoad: true
    }
});
