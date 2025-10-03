
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GastroheroCollector extends SketchCollector {

    static CONFIG = {
        id: "gastrohero",
        name: "GastroHero",
        description: "i18n.collectors.gastrohero.description",
        version: "0",
        website: "https://www.gastro-hero.de/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/87472.jpg",
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
        entryUrl: "https://www.gastro-hero.de/customer/account/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GastroheroCollector.CONFIG);
    }
}
