sap.ui.controller("TESTAPP.TESTAPP.ext.controller.AnalyticalListPageExt", {

	/*
	 * Content of the custom field shall be stored in the app state, so that it can be restored later again e.g. after a back navigation.
	 * @param oCustomData  : referance to the custome data.
	 */
	getCustomAppStateDataExtension: function (oCustomAppData) {
		/*
		var oCustomField1 = this.oView.byId("SampleFilterFieldID");
		if (oCustomField1) {
			oCustomAppData.SampleFilterFieldID = oCustomField1.getValue();
		}
		return oCustomAppData;
		*/
	},
	/*
	 * In order to restore content of the custom field in the filterbar e.g. after a back navigation.
	 * @param oCustomData  : referance to the custome data.
	 */
	restoreCustomAppStateDataExtension: function (oCustomAppData) {
		/*
		if (oCustomAppData.SampleFilterFieldID !== undefined) {
			if ( this.oView.byId("SampleFilterFieldID") ) {
				this.oView.byId("SampleFilterFieldID").setSelectedKey(oCustomAppData.SampleFilterFieldID);
			}
		}
		*/
	}
});