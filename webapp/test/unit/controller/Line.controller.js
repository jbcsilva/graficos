/*global QUnit*/

sap.ui.define([
	"viz/grafico-line/controller/Line.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Line Controller");

	QUnit.test("I should test the Line controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
