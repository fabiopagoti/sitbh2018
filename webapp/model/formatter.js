sap.ui.define([
		"sap/ui/core/ValueState"
	],
	function(ValueState) {
		"use strict";

		return {

			currencyValue: function(sValue) {
				if (!sValue) {
					return "";
				}

				return parseFloat(sValue).toFixed(2);
			},

			upperCase: function(sText) {
				return sText.toUpperCase();
			},

			priceToState: function(sPrice) {
				return (sPrice > 20) ? ValueState.Error : ValueState.Success;
			}

		};

	});