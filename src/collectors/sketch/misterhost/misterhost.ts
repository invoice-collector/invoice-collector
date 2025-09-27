
import { SketchCollector } from '../../sketchCollector';

export class MisterhostCollector extends SketchCollector {

    static CONFIG = {
        id: "misterhost",
        name: "MisterHost",
        description: "i18n.collectors.misterhost.description",
        version: "0",
        website: "https://misterhost.de/kundenbereich/clientarea.php?action=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/911.jpg",
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
        entryUrl: "https://misterhost.de/kundenbereich/clientarea.php?action=invoices",
    }

    constructor() {
        super(MisterhostCollector.CONFIG);
    }
}
