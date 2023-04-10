define([], function() {
    'use strict';
    
    return function (Component) {
        return Component.extend({
            defaults: {
                template: 'Buro210_CheckoutMessages/summary/cart-items',
                exports: {
                    'totals.subtotal': 'checkout.sidebar.guarantee:subtotal'
                }
            },
            isItemsBlockExpanded: function() {
                // this._super();
                console.log(this.totals.subtotal);
                return true;
            }
        })
    }
});
