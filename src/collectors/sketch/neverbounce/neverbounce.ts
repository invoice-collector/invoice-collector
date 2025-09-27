
import { SketchCollector } from '../../sketchCollector';

export class NeverbounceCollector extends SketchCollector {

    static CONFIG = {
        id: "neverbounce",
        name: "NEVERBOUNCE",
        description: "i18n.collectors.neverbounce.description",
        version: "0",
        website: "https://app.neverbounce.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/930624.jpg",
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
        entryUrl: "https://app.neverbounce.com/login",
    }

    constructor() {
        super(NeverbounceCollector.CONFIG);
    }
}
