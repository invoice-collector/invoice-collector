
import { SketchCollector } from '../../sketchCollector';

export class NorthdataCollector extends SketchCollector {

    static CONFIG = {
        id: "northdata",
        name: "NorthData",
        description: "i18n.collectors.northdata.description",
        version: "0",
        website: "https://www.northdata.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185147.jpg",
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
        entryUrl: "https://www.northdata.de/",
    }

    constructor() {
        super(NorthdataCollector.CONFIG);
    }
}
