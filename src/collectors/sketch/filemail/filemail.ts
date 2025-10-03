
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FilemailCollector extends SketchCollector {

    static CONFIG = {
        id: "filemail",
        name: "Filemail",
        description: "i18n.collectors.filemail.description",
        version: "0",
        website: "https://www.filemail.com/de/paymenthistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778955.jpg",
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
        entryUrl: "https://www.filemail.com/de/paymenthistory",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FilemailCollector.CONFIG);
    }
}
