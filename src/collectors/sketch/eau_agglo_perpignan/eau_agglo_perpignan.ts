
import { SketchCollector } from '../../sketchCollector';

export class EauAggloPerpignanCollector extends SketchCollector {

    static CONFIG = {
        id: "eau_agglo_perpignan",
        name: "Eau Agglo Perpignan",
        description: "i18n.collectors.eau_agglo_perpignan.description",
        version: "0",
        website: "https://www.ea-pm.fr/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4480110.jpg",
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
        entryUrl: "https://www.ea-pm.fr/documents",
    }

    constructor() {
        super(EauAggloPerpignanCollector.CONFIG);
    }
}
