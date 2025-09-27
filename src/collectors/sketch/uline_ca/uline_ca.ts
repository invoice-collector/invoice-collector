
import { SketchCollector } from '../../sketchCollector';

export class UlineCaCollector extends SketchCollector {

    static CONFIG = {
        id: "uline_ca",
        name: "Uline CA",
        description: "i18n.collectors.uline_ca.description",
        version: "0",
        website: "https://www.uline.ca/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/748576.jpg",
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
        entryUrl: "https://www.uline.ca/",
    }

    constructor() {
        super(UlineCaCollector.CONFIG);
    }
}
