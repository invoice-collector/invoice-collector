
import { SketchCollector } from '../../sketchCollector';

export class SapForMeCollector extends SketchCollector {

    static CONFIG = {
        id: "sap_for_me",
        name: "SAP for me",
        description: "i18n.collectors.sap_for_me.description",
        version: "0",
        website: "https://me.sap.com/financelegal/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1769545.jpg",
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
        entryUrl: "https://me.sap.com/financelegal/billing",
    }

    constructor() {
        super(SapForMeCollector.CONFIG);
    }
}
