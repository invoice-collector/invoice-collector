
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleIrpAutoEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_irp_auto_entreprise",
        name: "Mutuelle IRP-Auto - Entreprise",
        description: "i18n.collectors.mutuelle_irp_auto_entreprise.description",
        version: "0",
        website: "https://www.irp-auto.com/acces-votre-compte-entreprise",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129077.jpg",
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
        loginUrl: "https://www.irp-auto.com/acces-votre-compte-entreprise",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MutuelleIrpAutoEntrepriseCollector.CONFIG);
    }
}
