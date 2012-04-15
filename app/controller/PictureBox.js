Ext.define('4Developers.controller.PictureBox', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            picture : 'img'
        },
        control: {
            'picture' : {
                tap: 'onPictureTap'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    },

    onPictureTap: function(cmp) {
        Ext.Msg.alert('No touching!');
    }
});

