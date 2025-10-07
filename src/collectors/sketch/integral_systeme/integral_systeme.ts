
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IntegralSystemeCollector extends SketchCollector {

    static CONFIG = {
        id: "integral_systeme",
        name: "INTEGRAL SYSTEME",
        description: "i18n.collectors.integral_systeme.description",
        version: "0",
        website: "https://www.integral-systeme.fr/fr/moncompte/?in=/fr/commandes/commandeWeb",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1313045.jpg",
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
        entryUrl: "https://www.integral-systeme.fr/fr/moncompte/?in=/fr/commandes/commandeWeb",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IntegralSystemeCollector.CONFIG);
    }
}
