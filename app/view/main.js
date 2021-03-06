/*
 * File: app/view/main.js
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

Ext.define('MyApp.view.main', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.main',

    requires: [
        'MyApp.view.mainViewModel',
        'Ext.toolbar.Toolbar',
        'Ext.Img',
        'Ext.form.Label',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'main'
    },
    flex: 1,
    itemId: 'main',
    defaultListenerScope: true,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'toolbar',
            flex: 0,
            dock: 'top',
            height: 80,
            style: 'background-color: #424242;\nborder-bottom: 2px;\nborder-bottom-color: #5FB404;\nborder-bottom-style: solid;',
            items: [
                {
                    xtype: 'container',
                    height: '90%',
                    width: '50%',
                    layout: {
                        type: 'hbox',
                        align: 'middle'
                    },
                    items: [
                        {
                            xtype: 'image',
                            height: 50,
                            width: 50,
                            src: 'img/logohoja.png'
                        },
                        {
                            xtype: 'label',
                            flex: 1,
                            height: '40%',
                            style: 'color: #FAFAFA;\nfont-size: 100%;',
                            width: '80%',
                            text: 'AGRIMANAGER'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    height: '70%',
                    width: '50%',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                        pack: 'end'
                    },
                    items: [
                        {
                            xtype: 'button',
                            flex: 0,
                            defaultListenerScope: true,
                            border: 0,
                            id: 'sincBtn',
                            itemId: 'sincBtn',
                            margin: '0px 10px 0px 10px',
                            style: 'background-color: #424242;',
                            width: '30%',
                            glyph: 'xf0ee@FontAwesome',
                            params: 'SincPanel',
                            scale: 'large',
                            text: ''
                        },
                        {
                            xtype: 'button',
                            flex: 0,
                            defaultListenerScope: true,
                            border: 0,
                            id: 'configBtn',
                            itemId: 'configBtn',
                            margin: '0px 10px 0px 10px',
                            style: 'background-color: #424242;',
                            width: '30%',
                            glyph: 'xf013@FontAwesome',
                            params: 'configPanel',
                            scale: 'large',
                            text: ''
                        },
                        {
                            xtype: 'button',
                            flex: 0,
                            defaultListenerScope: true,
                            border: 0,
                            hidden: true,
                            id: 'returnView',
                            margin: '0px 10px 0px 10px',
                            style: 'background-color: #424242;',
                            width: '30%',
                            glyph: 'xf100@FontAwesome',
                            params: 'wini: \'10\';',
                            scale: 'large',
                            text: ''
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            flex: 1,
            id: 'contenedorPrincipal',
            padding: '5px',
            style: 'background-color: #D8D8D8;\nborder-color: #FAFAFA;',
            layout: 'card',
            listeners: {
                beforerender: 'onContenedorPrincipalBeforeRender'
            }
        }
    ],

    onContenedorPrincipalBeforeRender: function(component, eOpts) {

    }

});