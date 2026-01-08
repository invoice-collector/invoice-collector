
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtreinigungHamburgCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtreinigung_hamburg",
        name: "Stadtreinigung Hamburg",
        description: "i18n.collectors.stadtreinigung_hamburg.description",
        version: "0",
        website: "https://meine.stadtreinigung.hamburg/portal/index.html?sap-client=101&sap-language=DE&sap-sec_session_created=X#/InvoiceList",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1272442.jpg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        loginUrl: "https://meine.stadtreinigung.hamburg/portal/index.html?sap-client=101&sap-language=DE&sap-sec_session_created=X#/InvoiceList",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtreinigungHamburgCollector.CONFIG);
    }
}
