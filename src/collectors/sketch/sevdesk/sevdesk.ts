
import { SketchCollector } from '../../sketchCollector';

export class SevdeskCollector extends SketchCollector {

    static CONFIG = {
        id: "sevdesk",
        name: "sevdesk",
        description: "i18n.collectors.sevdesk.description",
        version: "0",
        website: "https://my.sevdesk.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10052.jpg",
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
        entryUrl: "https://my.sevdesk.de",
    }

    constructor() {
        super(SevdeskCollector.CONFIG);
    }
}
