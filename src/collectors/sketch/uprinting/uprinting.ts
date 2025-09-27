
import { SketchCollector } from '../../sketchCollector';

export class UprintingCollector extends SketchCollector {

    static CONFIG = {
        id: "uprinting",
        name: "UPrinting",
        description: "i18n.collectors.uprinting.description",
        version: "0",
        website: "https://portal.uprinting.com/order",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4449796.jpg",
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
        entryUrl: "https://portal.uprinting.com/order",
    }

    constructor() {
        super(UprintingCollector.CONFIG);
    }
}
