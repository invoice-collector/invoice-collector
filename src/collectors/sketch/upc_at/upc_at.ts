
import { SketchCollector } from '../../sketchCollector';

export class UpcAtCollector extends SketchCollector {

    static CONFIG = {
        id: "upc_at",
        name: "UPC.at",
        description: "i18n.collectors.upc_at.description",
        version: "0",
        website: "https://service.upc.at/myupc/portal/fixed",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3497.jpg",
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
        entryUrl: "https://service.upc.at/myupc/portal/fixed",
    }

    constructor() {
        super(UpcAtCollector.CONFIG);
    }
}
