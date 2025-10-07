
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MuvingCollector extends SketchCollector {

    static CONFIG = {
        id: "muving",
        name: "Muving",
        description: "i18n.collectors.muving.description",
        version: "0",
        website: "https://backend.muving.com/customer.html#invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/95517.jpg",
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
        entryUrl: "https://backend.muving.com/customer.html#invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MuvingCollector.CONFIG);
    }
}
