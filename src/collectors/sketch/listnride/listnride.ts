
import { SketchCollector } from '../../sketchCollector';

export class ListnrideCollector extends SketchCollector {

    static CONFIG = {
        id: "listnride",
        name: "listnride",
        description: "i18n.collectors.listnride.description",
        version: "0",
        website: "https://www.listnride.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1439520.jpg",
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
        entryUrl: "https://www.listnride.com/invoices",
    }

    constructor() {
        super(ListnrideCollector.CONFIG);
    }
}
