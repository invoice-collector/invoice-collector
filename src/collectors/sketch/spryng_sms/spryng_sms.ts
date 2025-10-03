
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SpryngSmsCollector extends SketchCollector {

    static CONFIG = {
        id: "spryng_sms",
        name: "Spryng SMS",
        description: "i18n.collectors.spryng_sms.description",
        version: "0",
        website: "https://portal.spryngsms.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/749705.jpg",
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
        entryUrl: "https://portal.spryngsms.com/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SpryngSmsCollector.CONFIG);
    }
}
