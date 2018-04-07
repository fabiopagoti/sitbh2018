sap.ui.define([], function() {
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
		}

	};

});