
import { SketchCollector } from '../../sketchCollector';

export class EastlinkCollector extends SketchCollector {

    static CONFIG = {
        id: "eastlink",
        name: "Eastlink",
        description: "i18n.collectors.eastlink.description",
        version: "0",
        website: "https://my.eastlink.ca/myaccount",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8863.jpg",
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
        entryUrl: "https://my.eastlink.ca/myaccount",
    }

    constructor() {
        super(EastlinkCollector.CONFIG);
    }
}
