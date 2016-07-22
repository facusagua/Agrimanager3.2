/*
 * File: app/view/establecimientosGrid.js
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

Ext.define('MyApp.view.establecimientosGrid', {
    extend: 'Ext.container.Container',
    alias: 'widget.establecimientosgrid',

    requires: [
        'MyApp.view.establecimientosGridViewModel',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.Number'
    ],

    viewModel: {
        type: 'establecimientosgrid'
    },
    height: 250,
    itemId: 'establecimientosGrid',
    width: 400,
    layout: 'border',
    defaultListenerScope: true,

    items: [
        {
            xtype: 'gridpanel',
            region: 'center',
            split: false,
            splitterResize: false,
            dock: 'top',
            id: 'establecimientosGrid',
            itemId: 'establecimientosGrid',
            rtl: false,
            style: 'padding: 5px 5px 5px 5px;\ncolor: #424242;',
            bodyStyle: 'color: #424242;',
            glyph: 'xf19c@FontAwesome',
            iconAlign: 'left',
            title: 'Establecimientos',
            titleAlign: 'left',
            split: true,
            autoLoad: true,
            forceFit: true,
            store: 'Establecimientos',
            columns: [
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'codigo',
                    text: 'Codigo',
                    format: '00'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'nombre',
                    text: 'Nombre'
                }
            ]
        }
    ],
    listeners: {
        beforerender: 'onEstablecimientosGridBeforeRender'
    },

    onEstablecimientosGridBeforeRender: function(component, eOpts) {
                debugger;
                this.store_name = 'Establecimientos';
                this.model_name = 'MyApp.model.Establecimientos';
                this.form_name  = 'MyApp.view.EstablecimientosForm';
                var store = Ext.getStore(this.store_name);
                this.form_store_array = [store];
                f_crud.load_store(this.store_name);
    }

});