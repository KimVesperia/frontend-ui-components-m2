define([
    'uiComponent',
], function(Component) {
    'use strict';
    
    return Component.extend({
        defaults: {
            '${ $.name }shippingAddressProvider': '${ $.name }AddressProvider',
            tracks: {
                countryId: true
            },
            imports: {
                countryId: 'checkoutProvider:shippingAddress.country_id'
            },
            listens: {
                '${ $.shippingAddressProvider }.country_id': 'country_id',
                '${ $.shippingAddressProvider }.region_id': 'handleRegionChange'
            }
        },
        initialize: function() {
            this._super();
            console.log(this.name + ' is initialized.');
        },
        showMessage: function() {
            console.log(this.countryId);
            return this.countryId === 'NL';
        },
        handleRegionChange: function(newRegionId) {
            console.log(newRegionId);
        }
    })
});
