sap.ui.define([
	"../model/formatter",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/library",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (formatter, Controller, JSONModel, mobileLibrary, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("home.kpmg.exercise3.controller.MainView1", {
		formatter: formatter,
		onInit: function () {
			var oModel = new JSONModel(sap.ui.require.toUrl("home.kpmg.exercise3/model/products.json"));
			this.getView().setModel(oModel);
		},
		onFilterProducts : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("Name", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("productsList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
	});
	
});