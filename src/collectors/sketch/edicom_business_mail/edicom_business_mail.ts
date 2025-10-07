
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EdicomBusinessMailCollector extends SketchCollector {

    static CONFIG = {
        id: "edicom_business_mail",
        name: "Edicom - Business@Mail",
        description: "i18n.collectors.edicom_business_mail.description",
        version: "0",
        website: "https://www.businessmail.net/index.htm?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4669744.jpg",
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
        entryUrl: "https://www.businessmail.net/index.htm?",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EdicomBusinessMailCollector.CONFIG);
    }
}
