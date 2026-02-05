
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SeedboxFrCollector extends SketchCollector {

    static CONFIG = {
        id: "seedbox_fr",
        name: "SeedBox.fr",
        description: "i18n.collectors.seedbox_fr.description",
        version: "0",
        website: "https://www.seedbox.fr/compte/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/138191.jpg",
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
        loginUrl: "https://www.seedbox.fr/compte/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SeedboxFrCollector.CONFIG);
    }
}
