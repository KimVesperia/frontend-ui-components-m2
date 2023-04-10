<?php declare(strict_types=1);
/**
* @author Kim Phung - BURO210
* @copyright Copyright © 2023 BURO210. All rights reserved.
* @package Buro210\FreeShippingPromo\ViewModel
*/

namespace Buro210\FreeShippingPromo\ViewModel;

/**
* Class ShippingConfig
* @package Buro210\FreeShippingPromo\\ShippingConfig
*/
Class ShippingConfig implements \Magento\Framework\View\Element\Block\ArgumentInterface
{
    /**
    * scopeConfig constructor.
    *
    * @param \Magento\Framework\App\Config\ScopeConfigInterface $scopeConfig
    */
    public function __construct(
        private readonly \Magento\Framework\App\Config\ScopeConfigInterface $scopeConfig
    ) {}

    /**
    * Get FreeShippingThreshold
    * @return int
    */
    public function getFreeShippingThreshold(): int
    {
         return (int) $this->scopeConfig->getValue('carriers/freeshipping/free_shipping_subtotal');
    }
}