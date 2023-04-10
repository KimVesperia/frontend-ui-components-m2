var config = {
    "config": {
        "mixins": {
            "Magento_Checkout/js/view/summary/cart-items": {
                "Buro210_CheckoutMessages/js/view/summary/cart-items-mixin": true
            }
        }
    },
    map: {
        "*": {
            "Magento_Checkout/template/sidebar":
                "Buro210_CheckoutMessages/template/sidebar"
        }
    }
}