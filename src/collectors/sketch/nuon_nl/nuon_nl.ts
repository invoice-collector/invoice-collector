
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NuonNlCollector extends SketchCollector {

    static CONFIG = {
        id: "nuon_nl",
        name: "nuon.nl",
        description: "i18n.collectors.nuon_nl.description",
        version: "0",
        website: "https://www.nuon.nl/service/mijn-nuon/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20442.jpg",
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
        loginUrl: "https://www.nuon.nl/service/mijn-nuon/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NuonNlCollector.CONFIG);
    }
}
