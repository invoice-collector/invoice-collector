
import { SketchCollector } from '../../sketchCollector';

export class BluepartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "bluepartner",
        name: "bluepartner",
        description: "i18n.collectors.bluepartner.description",
        version: "0",
        website: "https://kundenportal.bluepartner.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/87307.jpg",
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
        entryUrl: "https://kundenportal.bluepartner.de",
    }

    constructor() {
        super(BluepartnerCollector.CONFIG);
    }
}
