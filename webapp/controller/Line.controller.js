sap.ui.define([
	'sap/ui/core/mvc/Controller',
    'sap/ui/model/BindingMode',
    'sap/ui/model/json/JSONModel',
    'sap/viz/ui5/data/FlattenedDataset',
    'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format',
    './InitPage'
],
	function (Controller, BindingMode, JSONModel, FlattenedDataset, ChartFormatter, Format, InitPageUtil) {
		"use strict";

		var Controller = Controller.extend("viz.graficoline.controller.Line", {
			/*dataPath : "test-resources/sap/viz/demokit/dataset/milk_production_testing_data/revenue_cost_consume",*/

			oVizFrame : null,
	
			onInit : function (evt) {
				Format.numericFormatter(ChartFormatter.getInstance());
				var formatPattern = ChartFormatter.DefaultPattern;
				// set explored app's demo model on this sample
				var oModel = new JSONModel(this.settingsModel);
				oModel.setDefaultBindingMode(BindingMode.OneWay);
				this.getView().setModel(oModel);
	
				var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
				oVizFrame.setVizProperties({
					plotArea: {
						dataLabel: {
							formatString:formatPattern.SHORTFLOAT_MFD2,
							visible: true
						}
					},
					valueAxis1: {
						label: {
							formatString: formatPattern.SHORTFLOAT
						},
						title: {
							visible: true
						}
					},
					valueAxis2: {
						label: {
							formatString: formatPattern.SHORTFLOAT
						},
						title: {
							visible: true
						}
					},
					categoryAxis: {
						title: {
							visible: true
						}
					},
					title: {
						visible: true,
						text: 'Tempo Programado x Realizado'
					}
				});

				/*var dataModel = new JSONModel(this.dataPath + "/betterLarge.json");*/
				var dataModel = new JSONModel("test/dados/dados.json");
				oVizFrame.setModel(dataModel);
	
				var oPopOver = this.getView().byId("idPopOver");
				oPopOver.connect(oVizFrame.getVizUid());
				oPopOver.setFormatString(formatPattern.STANDARDFLOAT);
	
				InitPageUtil.initPageSettings(this.getView());
			}
		});
	
		return Controller;
	
	});
