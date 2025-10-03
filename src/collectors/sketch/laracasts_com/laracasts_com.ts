
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LaracastsComCollector extends SketchCollector {

    static CONFIG = {
        id: "laracasts_com",
        name: "Laracasts.com",
        description: "i18n.collectors.laracasts_com.description",
        version: "0",
        website: "https://laracasts.com/settings/subscription/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49330.jpg",
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
        entryUrl: "https://laracasts.com/settings/subscription/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LaracastsComCollector.CONFIG);
    }
}
