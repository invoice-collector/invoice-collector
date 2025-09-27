
import { SketchCollector } from '../../sketchCollector';

export class FastcometCollector extends SketchCollector {

    static CONFIG = {
        id: "fastcomet",
        name: "Fastcomet",
        description: "i18n.collectors.fastcomet.description",
        version: "0",
        website: "https://my.fastcomet.com/clientarea.php?action=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/131154.jpg",
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
        entryUrl: "https://my.fastcomet.com/clientarea.php?action=invoices",
    }

    constructor() {
        super(FastcometCollector.CONFIG);
    }
}
