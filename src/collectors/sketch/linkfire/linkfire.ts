
import { SketchCollector } from '../../sketchCollector';

export class LinkfireCollector extends SketchCollector {

    static CONFIG = {
        id: "linkfire",
        name: "Linkfire",
        description: "i18n.collectors.linkfire.description",
        version: "0",
        website: "https://login.linkfire.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/223921.jpg",
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
        entryUrl: "https://login.linkfire.com/",
    }

    constructor() {
        super(LinkfireCollector.CONFIG);
    }
}
