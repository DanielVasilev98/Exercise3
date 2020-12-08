sap.ui.define([], function () {
    "use strict";
    return {
        statusText: function (sStatus) {
            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            switch (sStatus) {
            case "Available":
                return resourceBundle.getText("You are lucky");
            case "Unavailable":
                return resourceBundle.getText("Unlucky");
            default:
                return sStatus;
            }
        }
    };
});