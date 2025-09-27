
import { SketchCollector } from '../../sketchCollector';

export class OverloopClassicCollector extends SketchCollector {

    static CONFIG = {
        id: "overloop_classic",
        name: "Overloop - Classic",
        description: "i18n.collectors.overloop_classic.description",
        version: "0",
        website: "https://app.overloop.com/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4479595.jpg",
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
        entryUrl: "https://app.overloop.com/billing/invoices",
    }

    constructor() {
        super(OverloopClassicCollector.CONFIG);
    }
}
