
import { SketchCollector } from '../../sketchCollector';

export class AtmsCollector extends SketchCollector {

    static CONFIG = {
        id: "atms",
        name: "ATMS",
        description: "i18n.collectors.atms.description",
        version: "0",
        website: "https://atms.at",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10945.jpg",
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
        entryUrl: "https://atms.at",
    }

    constructor() {
        super(AtmsCollector.CONFIG);
    }
}
