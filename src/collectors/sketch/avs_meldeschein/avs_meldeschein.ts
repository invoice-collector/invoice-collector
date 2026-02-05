
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AvsMeldescheinCollector extends SketchCollector {

    static CONFIG = {
        id: "avs_meldeschein",
        name: "AVS-Meldeschein",
        description: "i18n.collectors.avs_meldeschein.description",
        version: "0",
        website: "https://meldeschein.avs.de/traben-trarbach/auswert3Rechnungseinsicht.do?init=yes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4199733.jpg",
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
        loginUrl: "https://meldeschein.avs.de/traben-trarbach/auswert3Rechnungseinsicht.do?init=yes",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AvsMeldescheinCollector.CONFIG);
    }
}
