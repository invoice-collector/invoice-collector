
import { SketchCollector } from '../../sketchCollector';

export class FunnelishCollector extends SketchCollector {

    static CONFIG = {
        id: "funnelish",
        name: "Funnelish",
        description: "i18n.collectors.funnelish.description",
        version: "0",
        website: "https://app.funnelish.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2141139.jpg",
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
        entryUrl: "https://app.funnelish.com/settings/billing",
    }

    constructor() {
        super(FunnelishCollector.CONFIG);
    }
}
