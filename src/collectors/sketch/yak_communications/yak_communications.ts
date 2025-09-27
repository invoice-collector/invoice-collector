
import { SketchCollector } from '../../sketchCollector';

export class YakCommunicationsCollector extends SketchCollector {

    static CONFIG = {
        id: "yak_communications",
        name: "Yak Communications",
        description: "i18n.collectors.yak_communications.description",
        version: "0",
        website: "https://www.yak.ca/contact.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8521.jpg",
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
        entryUrl: "https://www.yak.ca/contact.html",
    }

    constructor() {
        super(YakCommunicationsCollector.CONFIG);
    }
}
