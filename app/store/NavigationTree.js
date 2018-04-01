Ext.define('FSBPrototype.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: 'Jackpot',
                iconCls: 'x-fa fa-desktop',
                //rowCls: 'nav-tree-badge nav-tree-badge-new',
                expanded: false,
                selectable: false,
                children: [
                    {
                        text: 'Jacpot Management',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Management Reporting',
                iconCls: 'x-fa fa-send',
                //rowCls: 'nav-tree-badge nav-tree-badge-hot',
                expanded: false,
                selectable: false,
                children: [
                    {
                        text: 'Reporting',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Retail',
                iconCls: 'x-fa fa-user',
                // viewType: 'profile',
                // leaf: true
                expanded: false,
                selectable: false,
                children: [
                    {
                        text: 'Electronic Point Of Sale',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Customer Services',
                iconCls: 'x-fa fa-search',
                // viewType: 'searchresults',
                // leaf: true
                expanded: false,
                selectable: false,
                children: [
                    {
                        text: 'Customer Enquieries',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    },
                    {
                        text: 'Customer Search',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Sportsbook Trader',
                iconCls: 'x-fa fa-question',
                // viewType: 'faq',
                // leaf: true
                expanded: false,
                selectable: false,
                children: [
                    {
                        text: 'Bet Ticker',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    }
                ]
            },
            {
                text: 'System Administrator',
                iconCls: 'x-fa fa-leanpub',
                expanded: false,
                selectable: false,
                children: [
                    {
                        text: 'Security',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    }
                ]
            },
            {
                text: 'User Accounts',
                iconCls: 'x-fa fa-leanpub',
                expanded: false,
                selectable: false,
                children: [
                    {
                        text: 'Users',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Odds Compiler',
                iconCls: 'x-fa fa-flask',
                // viewType: 'widgets',
                // leaf: true
                expanded: false,
                selectable: false,
                children: [
                    {
                        text: 'Blank Page',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Marketing',
                iconCls: 'x-fa fa-edit',
                // viewType: 'forms',
                // leaf: true
                expanded: false,
                selectable: false,
                children: [
                    {
                        text: 'Campaign v2',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Content Management',
                iconCls: 'x-fa fa-pie-chart',
                // viewType: 'charts',
                // leaf: true
                expanded: false,
                selectable: false,
                children: [
                    {
                        text: 'CMS',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Site Administrator',
                iconCls: 'x-fa fa-pie-chart',
                // viewType: 'charts',
                // leaf: true
                expanded: false,
                selectable: false,
                children: [
                    {
                        text: 'Platform Config',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    }
                ]
            }
        ]
    }
});
