Ext.define('4Developers.model.Talk', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'title', type: 'string'},
            {name: 'speaker', type: 'string'}
        ],
        proxy: {
            type: 'ajax',
            url : 'resources/schedule.json',
            reader: {
                type: 'json',
                rootProperty: 'schedule'
            }
        }
    }
});
