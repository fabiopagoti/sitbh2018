/*global location */
sap.ui.define([
	"sitbh/controller/BaseController",
	"sitbh/model/formatter"
], function(BaseController, formatter) {
	"use strict";
	return BaseController.extend("sitbh.controller.Produtos", {

		formatter: formatter,

		onInit: function() {
			this.getRouter().getRoute("produtos").attachPatternMatched(this._onPatternMached, this);
		},

		onNavBack: function() {
			this.getRouter().navTo("default");
		},

		_onPatternMached: function(oEvent) {
			var oParameters = oEvent.getParameters();
			var oArguments = oParameters.arguments;
			var sIdCategoria = oArguments.idCategoria;

			var oPromiseMetadataLoaded = this.getModel().metadataLoaded();
			oPromiseMetadataLoaded.then(function() {
				
				var sKey = this.getModel().createKey("Categories", {
					ID: sIdCategoria
				});

				this.getView().bindElement({
					path: "/" + sKey
				});

			}.bind(this));
		}

	});
});