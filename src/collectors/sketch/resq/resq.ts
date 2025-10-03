
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ResqCollector extends SketchCollector {

    static CONFIG = {
        id: "resq",
        name: "ResQ",
        description: "i18n.collectors.resq.description",
        version: "0",
        website: "https://app.getresq.com/2s9/invoices/invoices?page=2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3004079.jpg",
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
        entryUrl: "https://app.getresq.com/2s9/invoices/invoices?page=2",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ResqCollector.CONFIG);
    }
}
