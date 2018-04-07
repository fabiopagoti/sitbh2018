sap.ui.define([
	"sitbh/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("sitbh.controller.App", {
		
		onItemPress: function(oEvent){
			alert("Item " + oEvent.getParameters().listItem.getTitle() + " clicado");
		}
	});

});