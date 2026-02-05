
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SocieteGeneraleProfessionnelsCollector extends SketchCollector {

    static CONFIG = {
        id: "societe_generale_professionnels",
        name: "Societe Generale Professionnels",
        description: "i18n.collectors.societe_generale_professionnels.description",
        version: "0",
        website: "https://professionnels.secure.societegenerale.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115746.jpg",
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
        loginUrl: "https://professionnels.secure.societegenerale.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SocieteGeneraleProfessionnelsCollector.CONFIG);
    }
}
