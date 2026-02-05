
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VodafoneMeinkabelCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_meinkabel",
        name: "Vodafone MeinKabel",
        description: "i18n.collectors.vodafone_meinkabel.description",
        version: "0",
        website: "https://kabel.vodafone.de/meinkabel/rechnungen/rechnung",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1336515.jpg",
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
        loginUrl: "https://kabel.vodafone.de/meinkabel/rechnungen/rechnung",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VodafoneMeinkabelCollector.CONFIG);
    }
}
