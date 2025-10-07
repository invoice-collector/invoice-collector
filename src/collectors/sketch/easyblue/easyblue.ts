
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EasyblueCollector extends SketchCollector {

    static CONFIG = {
        id: "easyblue",
        name: "Easyblue",
        description: "i18n.collectors.easyblue.description",
        version: "0",
        website: "https://app.easyblue.io/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/511281.jpg",
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
        entryUrl: "https://app.easyblue.io/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EasyblueCollector.CONFIG);
    }
}
