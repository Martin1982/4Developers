Ext.define('4Developers.view.Pictures', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'picturecarousel',

    config: {
        items: [
            {
                src: 'resources/images/img1.jpg',
                xtype: 'img'
            },
            {
                src: 'resources/images/img2.jpg',
                xtype: 'img'
            },
            {
                src: 'resources/images/img3.jpg',
                xtype: 'img'
            },
            {
                src: 'resources/images/img4.jpg',
                xtype: 'img'
            }
        ]
    }
});
