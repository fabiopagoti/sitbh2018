sap.ui.define([
	"sap/ui/core/util/MockServer"
], function(MockServer) {
	"use strict";

	return {

		init: function() {

			var oMockServer = new MockServer({
				// rootUri : 
			});

			oMockServer.simulate("", {
				sMockdataBaseUrl: "",
				bGenerateMissingMockData: true
			});

			oMockServer.start();

			jQuery.sap.log.info("Running the app with mock data");
		}
		
	};

});