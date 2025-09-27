
import { SketchCollector } from '../../sketchCollector';

export class NiroCollector extends SketchCollector {

    static CONFIG = {
        id: "niro",
        name: "Niro",
        description: "i18n.collectors.niro.description",
        version: "0",
        website: "https://app.niro.co/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/761358.jpg",
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
        entryUrl: "https://app.niro.co/account/billing",
    }

    constructor() {
        super(NiroCollector.CONFIG);
    }
}
