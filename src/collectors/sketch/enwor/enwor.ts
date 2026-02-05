
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EnworCollector extends SketchCollector {

    static CONFIG = {
        id: "enwor",
        name: "Enwor",
        description: "i18n.collectors.enwor.description",
        version: "0",
        website: "https://www.enwor.de/enworPortal/Portal?Anwendung=RhenagRechnungslisteV2&Methode=Init&AuswahlVertragSchluessel=214992062!4",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2654200.jpg",
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
        loginUrl: "https://www.enwor.de/enworPortal/Portal?Anwendung=RhenagRechnungslisteV2&Methode=Init&AuswahlVertragSchluessel=214992062!4",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EnworCollector.CONFIG);
    }
}
