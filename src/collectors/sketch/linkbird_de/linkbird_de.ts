
import { SketchCollector } from '../../sketchCollector';

export class LinkbirdDeCollector extends SketchCollector {

    static CONFIG = {
        id: "linkbird_de",
        name: "linkbird.de",
        description: "i18n.collectors.linkbird_de.description",
        version: "0",
        website: "https://de.contentbird.io/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/451.jpg",
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
        entryUrl: "https://de.contentbird.io/",
    }

    constructor() {
        super(LinkbirdDeCollector.CONFIG);
    }
}
