Ext.application({
    profiles: ["Tablet", "Phone"],

    models: ["Talk"],

    controllers: ["PictureBox"],

    name: '4Developers',

    requires: [
        'Ext.MessageBox'
    ],

    stores: [
        'Schedule'
    ],

    views: [
        'Main',
        'Pictures',
        'Schedule'
    ],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },

    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('4Developers.view.Main'));

        // Notify the user
        Ext.Msg.alert('Welcome!');
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
