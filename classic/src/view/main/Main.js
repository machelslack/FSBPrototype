/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FSBPrototype.view.main.Main', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.button.Segmented',
        'Ext.list.Tree'
    ],



    controller: 'main',
    viewModel: 'main',

    cls: 'sencha-dash-viewport',
    itemId: 'mainView',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    listeners: {
        render: 'onMainViewRender'
    },

    items: [
        {
            xtype: 'toolbar',
            cls: 'sencha-dash-dash-headerbar shadow',
            height: 64,
            itemId: 'headerBar',
            items: [
                {
                    xtype: 'component',
                    reference: 'senchaLogo',
                    cls: 'sencha-logo',
                    html: '<div class="main-logo">Sencha</div>',
                    width: 250
                },
                {
                    margin: '0 0 0 8',
                    ui: 'header',
                    iconCls: 'fa fa-navicon',
                    id: 'main-navigation-btn',
                    handler: 'onToggleNavigationSize'
                },
                '->',
                {
                    xtype: 'segmentedbutton',
                    margin: '0 16 0 0',

                    platformConfig: {
                        ie9m: {
                            hidden: true
                        }
                    },

                    items: [{
                        iconCls: 'fa fa-desktop',
                        pressed: true
                    }, {
                        iconCls: 'fa fa-tablet',
                        handler: 'onSwitchToModern',
                        tooltip: 'Switch to modern toolkit'
                    }]
                },
                {
                    iconCls: 'fa fa-search',
                    ui: 'header',
                    href: '#searchresults',
                    hrefTarget: '_self',
                    tooltip: 'See latest search'
                },
                {
                    iconCls: 'fa fa-envelope',
                    ui: 'header',
                    href: '#email',
                    hrefTarget: '_self',
                    tooltip: 'Check your email'
                },
                {
                    iconCls: 'fa fa-question',
                    ui: 'header',
                    href: '#faq',
                    hrefTarget: '_self',
                    tooltip: 'Help / FAQ\'s'
                },
                {
                    iconCls: 'fa fa-th-large',
                    ui: 'header',
                    href: '#profile',
                    hrefTarget: '_self',
                    tooltip: 'See your profile'
                },
                {
                    xtype: 'tbtext',
                    text: 'Goff Smith',
                    cls: 'top-user-name'
                },
                {
                    xtype: 'image',
                    cls: 'header-right-profile-image',
                    height: 35,
                    width: 35,
                    alt: 'current user image',
                    //src: 'resources/images/user-profile/2.png'
                }
            ]
        },
        {
            xtype: 'maincontainerwrap',
            id: 'main-view-detail-wrap',
            reference: 'mainContainerWrap',
            flex: 1,
            items: [
                {
                    xtype: 'container',
                    width: 250,
                    items: [
                        {
                            xtype: 'component',
                            bind:{
                                html: '<div>Welcome {username} </div>',
                            },
                        
                          
                        },
                        {

                            xtype: 'treelist',
                            reference: 'navigationTreeList',
                            itemId: 'navigationTreeList',
                            ui: 'nav',
                            store: 'NavigationTree',
                            
                            expanderFirst: false,
                            expanderOnly: false,
                            listeners: {
                                selectionchange: 'onNavigationTreeSelectionChange'
                            }

                        }

                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    reference: 'mainCardPanel',
                    cls: 'sencha-dash-right-main-container',
                    itemId: 'contentPanel',
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    }
                }
            ]
        }
    ]
});
