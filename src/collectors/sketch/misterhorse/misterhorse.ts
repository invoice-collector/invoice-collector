
import { SketchCollector } from '../../sketchCollector';

export class MisterhorseCollector extends SketchCollector {

    static CONFIG = {
        id: "misterhorse",
        name: "misterhorse",
        description: "i18n.collectors.misterhorse.description",
        version: "0",
        website: "https://misterhorse.com/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1266858.jpg",
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
        entryUrl: "https://misterhorse.com/account/orders",
    }

    constructor() {
        super(MisterhorseCollector.CONFIG);
    }
}
