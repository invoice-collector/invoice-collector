
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VspEmployerCollector extends SketchCollector {

    static CONFIG = {
        id: "vsp_employer",
        name: "VSP Employer",
        description: "i18n.collectors.vsp_employer.description",
        version: "0",
        website: "https://billing.vsp.com/bd/startEBPP.sap",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2734234.jpg",
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
        entryUrl: "https://billing.vsp.com/bd/startEBPP.sap",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VspEmployerCollector.CONFIG);
    }
}
