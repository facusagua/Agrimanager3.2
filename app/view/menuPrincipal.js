/*
 * File: app/view/menuPrincipal.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.menuPrincipal', {
    extend: 'Ext.container.Container',
    alias: 'widget.menuprincipal',

    requires: [
        'MyApp.view.menuPrincipalViewModel',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'menuprincipal'
    },
    dock: 'top',
    height: 504,
    itemId: 'menuTablas',
    scrollable: 'true',
    style: 'background-color: #D8D8D8;',

    layout: {
        type: 'vbox',
        align: 'center'
    },
    items: [
        {
            xtype: 'button',
            flex: 0,
            height: 90,
            margin: '10px 0px 10px 0px',
            style: 'margin: 2px 10px 2px 10px;\nbackground-color: #424242;',
            width: '80%',
            allowDepress: false,
            arrowVisible: false,
            glyph: 'xf043@FontAwesome',
            icon: '',
            iconAlign: 'top',
            iconCls: '',
            scale: 'medium',
            text: 'Alta de Insumos'
        },
        {
            xtype: 'button',
            flex: 0,
            height: 90,
            margin: '10px 0px 10px 0px',
            style: 'margin: 2px 10px 2px 10px;\nbackground-color: #424242;',
            width: '80%',
            allowDepress: false,
            arrowVisible: false,
            glyph: 'xf0d1@FontAwesome',
            icon: '',
            iconAlign: 'top',
            iconCls: '',
            scale: 'medium',
            text: 'Produccion'
        },
        {
            xtype: 'button',
            flex: 0,
            height: 90,
            id: 'laboresBtn',
            itemId: 'laboresBtn',
            margin: '10px 0px 10px 0px',
            style: 'margin: 2px 10px 2px 10px;\nbackground-color: #424242;',
            width: '80%',
            allowDepress: false,
            arrowVisible: false,
            glyph: 'xf234@FontAwesome',
            icon: '',
            iconAlign: 'top',
            iconCls: '',
            params: 'actividadeslotesGrid',
            scale: 'medium',
            text: 'Labores'
        },
        {
            xtype: 'button',
            flex: 0,
            height: 90,
            id: 'tablasBtn',
            margin: '10px 0px 10px 0px',
            style: 'margin: 2px 10px 2px 10px;\nbackground-color: #424242;',
            width: '80%',
            allowDepress: false,
            arrowVisible: false,
            glyph: 'xf009@FontAwesome',
            icon: '',
            iconAlign: 'top',
            iconCls: '',
            params: 'menuTabla',
            scale: 'medium',
            text: 'Tablas'
        }
    ]

});