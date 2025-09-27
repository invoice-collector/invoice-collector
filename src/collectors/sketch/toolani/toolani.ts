
import { SketchCollector } from '../../sketchCollector';

export class ToolaniCollector extends SketchCollector {

    static CONFIG = {
        id: "toolani",
        name: "toolani",
        description: "i18n.collectors.toolani.description",
        version: "0",
        website: "https://www.toolani.com/de-de/members/einstellungen/#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/61845.jpg",
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
        entryUrl: "https://www.toolani.com/de-de/members/einstellungen/#/invoices",
    }

    constructor() {
        super(ToolaniCollector.CONFIG);
    }
}
