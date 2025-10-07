
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MagistoCollector extends SketchCollector {

    static CONFIG = {
        id: "magisto",
        name: "Magisto",
        description: "i18n.collectors.magisto.description",
        version: "0",
        website: "https://www.magisto.com/account/my_invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/513507.jpg",
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
        entryUrl: "https://www.magisto.com/account/my_invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MagistoCollector.CONFIG);
    }
}
