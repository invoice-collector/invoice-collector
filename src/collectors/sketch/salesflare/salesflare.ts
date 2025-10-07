
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SalesflareCollector extends SketchCollector {

    static CONFIG = {
        id: "salesflare",
        name: "Salesflare",
        description: "i18n.collectors.salesflare.description",
        version: "0",
        website: "https://salesflare.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/159859.jpg",
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
        entryUrl: "https://salesflare.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SalesflareCollector.CONFIG);
    }
}
