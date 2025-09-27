
import { SketchCollector } from '../../sketchCollector';

export class MaxonCollector extends SketchCollector {

    static CONFIG = {
        id: "maxon",
        name: "maxon",
        description: "i18n.collectors.maxon.description",
        version: "0",
        website: "https://my.maxon.net",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/210563.jpg",
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
        entryUrl: "https://my.maxon.net",
    }

    constructor() {
        super(MaxonCollector.CONFIG);
    }
}
