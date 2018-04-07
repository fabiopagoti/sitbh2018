/*global history */
sap.ui.define([
	"sitbh/controller/BaseController",
	"sitbh/model/formatter"
], function(BaseController, formatter) {
	"use strict";

	return BaseController.extend("sitbh.controller.Categorias", {

		formatter: formatter,

		onInit: function() {

		},
			
		onItemPress: function(oEvent){
			var oListItem = oEvent.getParameters().listItem;
			var oContext = oListItem.getBindingContext();
			var oCategory = oContext.getObject();
			// alert("Item " + oCategory.Name + " clicado");
			this.getRouter().navTo("produtos",{
				idCategoria: oCategory.ID
			});
		},
		
		onAdd: function(){
			this.getRouter().navTo("novaCategoria");
		}
		
	});
});