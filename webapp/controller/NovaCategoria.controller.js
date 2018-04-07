sap.ui.define([
	"sitbh/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("sitbh.controller.NovaCategoria", {

		onInit: function() {
			this.getRouter().getRoute("novaCategoria").attachPatternMatched(this._onPatternMached, this);
		},

		_onPatternMached: function(oEvent) {
			// @type sap.ui.model.odata.v2.ODataModel
			var oModel = this.getModel();

			var oPromiseMetadataLoaded = this.getModel().metadataLoaded();
			oPromiseMetadataLoaded.then(function() {

				var oContext = oModel.createEntry("/Categories", {

				});

				this.getView().setBindingContext(oContext);

			}.bind(this));
		},

		onSave: function() {
			this.getModel().submitChanges();
		}
	});

});