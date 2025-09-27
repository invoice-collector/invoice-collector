
import { SketchCollector } from '../../sketchCollector';

export class MrpEasyCollector extends SketchCollector {

    static CONFIG = {
        id: "mrp_easy",
        name: "MRP easy",
        description: "i18n.collectors.mrp_easy.description",
        version: "0",
        website: "https://app.mrpeasy.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4572166.jpg",
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
        entryUrl: "https://app.mrpeasy.com",
    }

    constructor() {
        super(MrpEasyCollector.CONFIG);
    }
}
