
import { SketchCollector } from '../../sketchCollector';

export class QuicknodeCollector extends SketchCollector {

    static CONFIG = {
        id: "quicknode",
        name: "QuickNode",
        description: "i18n.collectors.quicknode.description",
        version: "0",
        website: "https://www.quicknode.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2669952.jpg",
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
        entryUrl: "https://www.quicknode.com",
    }

    constructor() {
        super(QuicknodeCollector.CONFIG);
    }
}
