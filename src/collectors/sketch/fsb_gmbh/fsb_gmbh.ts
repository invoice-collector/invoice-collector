
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FsbGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "fsb_gmbh",
        name: "FSB GmbH",
        description: "i18n.collectors.fsb_gmbh.description",
        version: "0",
        website: "https://fsb-fachinstitut.de/seminarverwaltung/kundenkontogesamtuebersicht/belege/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1745277.jpg",
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
        loginUrl: "https://fsb-fachinstitut.de/seminarverwaltung/kundenkontogesamtuebersicht/belege/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FsbGmbhCollector.CONFIG);
    }
}
