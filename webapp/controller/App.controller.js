sap.ui.define([
	"sitbh/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("sitbh.controller.App", {
		
		onItemPress: function(oEvent){
			var oListItem = oEvent.getParameters().listItem;
			var oContext = oListItem.getBindingContext();
			var oCategory = oContext.getObject();
			alert("Item " + oCategory.Name + " clicado");
		},
		
		upperCase: function(sText){
			return sText.toUpperCase();
		}
	});

});