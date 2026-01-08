
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CrtServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "crt_services",
        name: "CRT SERVICES",
        description: "i18n.collectors.crt_services.description",
        version: "0",
        website: "https://www.crt.asso.fr/NEA/Facture/FacturesSummary?idEmetteur=4",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185289.jpg",
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
        loginUrl: "https://www.crt.asso.fr/NEA/Facture/FacturesSummary?idEmetteur=4",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CrtServicesCollector.CONFIG);
    }
}
