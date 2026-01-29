
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SapBillerFurLitmosCollector extends SketchCollector {

    static CONFIG = {
        id: "sap_biller_fur_litmos",
        name: "SAP Biller (fur Litmos)",
        description: "i18n.collectors.sap_biller_fur_litmos.description",
        version: "0",
        website: "https://directbilling.sap.com/bd_callidus/public/frameset_top_html.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/162052.jpg",
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
        loginUrl: "https://directbilling.sap.com/bd_callidus/public/frameset_top_html.jsp",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SapBillerFurLitmosCollector.CONFIG);
    }
}
