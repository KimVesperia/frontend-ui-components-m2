define([
    'uiComponent',
], function(Component) {
    'use strict';
    
    return Component.extend({
        showMessage: function() {
            console.log(this.subtotal);
            return this.subtotal > 100;
        },
        initialize: function() {
            this._super();
            console.log(this.name + ' is initialized.');
        }
    })
});
