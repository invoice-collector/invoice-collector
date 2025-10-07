
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GlomexCollector extends SketchCollector {

    static CONFIG = {
        id: "glomex",
        name: "Glomex",
        description: "i18n.collectors.glomex.description",
        version: "0",
        website: "https://exchange.glomex.com/manage/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/748669.jpg",
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
        entryUrl: "https://exchange.glomex.com/manage/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GlomexCollector.CONFIG);
    }
}
