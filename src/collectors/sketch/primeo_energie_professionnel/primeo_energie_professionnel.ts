
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PrimeoEnergieProfessionnelCollector extends SketchCollector {

    static CONFIG = {
        id: "primeo_energie_professionnel",
        name: "PRIMEO ENERGIE PROFESSIONNEL",
        description: "i18n.collectors.primeo_energie_professionnel.description",
        version: "0",
        website: "https://pro.primeo-energie.fr/invoices-pc",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1444804.jpg",
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
        loginUrl: "https://pro.primeo-energie.fr/invoices-pc",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PrimeoEnergieProfessionnelCollector.CONFIG);
    }
}
