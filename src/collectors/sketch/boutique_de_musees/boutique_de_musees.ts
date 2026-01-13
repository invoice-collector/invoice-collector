
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BoutiqueDeMuseesCollector extends SketchCollector {

    static CONFIG = {
        id: "boutique_de_musees",
        name: "Boutique de Musees",
        description: "i18n.collectors.boutique_de_musees.description",
        version: "0",
        website: "https://www.boutiquesdemusees.fr/en/club/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115922.jpg",
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
        loginUrl: "https://www.boutiquesdemusees.fr/en/club/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BoutiqueDeMuseesCollector.CONFIG);
    }
}
