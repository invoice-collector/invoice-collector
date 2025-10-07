
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LitmusCollector extends SketchCollector {

    static CONFIG = {
        id: "litmus",
        name: "Litmus",
        description: "i18n.collectors.litmus.description",
        version: "0",
        website: "https://litmus.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9369.jpg",
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
        entryUrl: "https://litmus.com/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LitmusCollector.CONFIG);
    }
}
