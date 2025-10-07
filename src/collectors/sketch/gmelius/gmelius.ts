
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GmeliusCollector extends SketchCollector {

    static CONFIG = {
        id: "gmelius",
        name: "Gmelius",
        description: "i18n.collectors.gmelius.description",
        version: "0",
        website: "https://gmelius.io/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39382.jpg",
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
        entryUrl: "https://gmelius.io/account/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GmeliusCollector.CONFIG);
    }
}
