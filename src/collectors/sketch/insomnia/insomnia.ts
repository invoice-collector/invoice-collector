
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InsomniaCollector extends SketchCollector {

    static CONFIG = {
        id: "insomnia",
        name: "Insomnia",
        description: "i18n.collectors.insomnia.description",
        version: "0",
        website: "https://insomnia.rest/app/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/457666.jpg",
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
        entryUrl: "https://insomnia.rest/app/invoices/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InsomniaCollector.CONFIG);
    }
}
