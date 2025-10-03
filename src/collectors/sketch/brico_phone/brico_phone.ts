
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BricoPhoneCollector extends SketchCollector {

    static CONFIG = {
        id: "brico_phone",
        name: "BRICO-PHONE",
        description: "i18n.collectors.brico_phone.description",
        version: "0",
        website: "https://www.brico-phone.com/connexion?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1525136.jpg",
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
        entryUrl: "https://www.brico-phone.com/connexion?back=my-account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BricoPhoneCollector.CONFIG);
    }
}
