
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AvsLandwurstenCollector extends SketchCollector {

    static CONFIG = {
        id: "avs_landwursten",
        name: "AVS Landwursten",
        description: "i18n.collectors.avs_landwursten.description",
        version: "0",
        website: "https://meldeschein.avs.de/landwursten/auswert3Rechnungseinsicht.do?init=yes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4487732.jpg",
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
        loginUrl: "https://meldeschein.avs.de/landwursten/auswert3Rechnungseinsicht.do?init=yes",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AvsLandwurstenCollector.CONFIG);
    }
}
