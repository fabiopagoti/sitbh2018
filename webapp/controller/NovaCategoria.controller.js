sap.ui.define([
	"sitbh/controller/BaseController",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function(BaseController, MessageToast, MessageBox) {
	"use strict";

	return BaseController.extend("sitbh.controller.NovaCategoria", {

		onInit: function() {
			this.getRouter().getRoute("novaCategoria").attachPatternMatched(this._onPatternMached, this);
		},

		onNavBack: function() {
			this.getRouter().navTo("default");
		},

		_onPatternMached: function(oEvent) {
			// @type sap.ui.model.odata.v2.ODataModel
			var oModel = this.getModel();

			var oPromiseMetadataLoaded = this.getModel().metadataLoaded();
			oPromiseMetadataLoaded.then(function() {

				this._oContext = oModel.createEntry("/Categories", {
				});

				this.getView().setBindingContext(this._oContext);

			}.bind(this));
		},

		onSave: function() {
			
			
			function onSuccess(oNovaCategoria){
				MessageToast.show("Coleção cadastrada com sucesso");
			}
			
			function onError(oError){
				MessageBox.error("Erro na criação da categoria");
			}
			
			this.getModel().submitChanges({
				success: onSuccess.bind(this),
				error: onError.bind(this)
			});
		},
		
		onCancel: function(){
			this.getModel().deleteCreatedEntry(this._oContext);
		}
	});

});