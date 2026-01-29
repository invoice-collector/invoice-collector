
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EbaseB2bCollector extends SketchCollector {

    static CONFIG = {
        id: "ebase_b2b",
        name: "ebase b2b",
        description: "i18n.collectors.ebase_b2b.description",
        version: "0",
        website: "https://portal.ebase.com/(e2)/eop/tools-reports/bestandscontrolling/weitere-auswertungen/vermittlerpostkorb",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/111984.jpg",
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
        loginUrl: "https://portal.ebase.com/(e2)/eop/tools-reports/bestandscontrolling/weitere-auswertungen/vermittlerpostkorb",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EbaseB2bCollector.CONFIG);
    }
}
