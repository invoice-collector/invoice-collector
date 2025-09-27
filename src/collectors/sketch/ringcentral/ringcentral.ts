
import { SketchCollector } from '../../sketchCollector';

export class RingcentralCollector extends SketchCollector {

    static CONFIG = {
        id: "ringcentral",
        name: "RingCentral",
        description: "i18n.collectors.ringcentral.description",
        version: "0",
        website: "https://service.ringcentral.com/#/enterCredential",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21719.jpg",
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
        entryUrl: "https://service.ringcentral.com/#/enterCredential",
    }

    constructor() {
        super(RingcentralCollector.CONFIG);
    }
}
