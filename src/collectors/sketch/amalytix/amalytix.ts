
import { SketchCollector } from '../../sketchCollector';

export class AmalytixCollector extends SketchCollector {

    static CONFIG = {
        id: "amalytix",
        name: "AMALYTIX",
        description: "i18n.collectors.amalytix.description",
        version: "0",
        website: "https://tool.amalytix.com/#/index/profile",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/57616.jpg",
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
        entryUrl: "https://tool.amalytix.com/#/index/profile",
    }

    constructor() {
        super(AmalytixCollector.CONFIG);
    }
}
