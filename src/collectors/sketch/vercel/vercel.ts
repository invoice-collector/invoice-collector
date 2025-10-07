
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VercelCollector extends SketchCollector {

    static CONFIG = {
        id: "vercel",
        name: "Vercel",
        description: "i18n.collectors.vercel.description",
        version: "0",
        website: "https://vercel.com/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779723.jpg",
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
        entryUrl: "https://vercel.com/account/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VercelCollector.CONFIG);
    }
}
