
import { SketchCollector } from '../../sketchCollector';

export class SapBillerFurLitmosCollector extends SketchCollector {

    static CONFIG = {
        id: "sap_biller_fur_litmos",
        name: "SAP Biller (fur Litmos)",
        description: "i18n.collectors.sap_biller_fur_litmos.description",
        version: "0",
        website: "https://directbilling.sap.com/bd_callidus/public/frameset_top_html.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/162052.jpg",
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
        entryUrl: "https://directbilling.sap.com/bd_callidus/public/frameset_top_html.jsp",
    }

    constructor() {
        super(SapBillerFurLitmosCollector.CONFIG);
    }
}
