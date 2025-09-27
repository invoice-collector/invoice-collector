
import { SketchCollector } from '../../sketchCollector';

export class EsetCollector extends SketchCollector {

    static CONFIG = {
        id: "eset",
        name: "ESET",
        description: "i18n.collectors.eset.description",
        version: "0",
        website: "https://portal.eset.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33964.jpg",
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
        entryUrl: "https://portal.eset.de/",
    }

    constructor() {
        super(EsetCollector.CONFIG);
    }
}
