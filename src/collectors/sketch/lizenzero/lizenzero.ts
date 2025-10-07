
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LizenzeroCollector extends SketchCollector {

    static CONFIG = {
        id: "lizenzero",
        name: "Lizenzero",
        description: "i18n.collectors.lizenzero.description",
        version: "0",
        website: "https://www.lizenzero.de/account/documentsInvoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/751025.jpg",
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
        entryUrl: "https://www.lizenzero.de/account/documentsInvoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LizenzeroCollector.CONFIG);
    }
}
