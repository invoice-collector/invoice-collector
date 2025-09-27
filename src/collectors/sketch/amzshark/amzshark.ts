
import { SketchCollector } from '../../sketchCollector';

export class AmzsharkCollector extends SketchCollector {

    static CONFIG = {
        id: "amzshark",
        name: "AMZShark",
        description: "i18n.collectors.amzshark.description",
        version: "0",
        website: "https://amzshark.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/770827.jpg",
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
        entryUrl: "https://amzshark.com/login",
    }

    constructor() {
        super(AmzsharkCollector.CONFIG);
    }
}
