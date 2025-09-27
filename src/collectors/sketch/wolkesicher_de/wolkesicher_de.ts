
import { SketchCollector } from '../../sketchCollector';

export class WolkesicherDeCollector extends SketchCollector {

    static CONFIG = {
        id: "wolkesicher_de",
        name: "wolkesicher.de",
        description: "i18n.collectors.wolkesicher_de.description",
        version: "0",
        website: "https://my.wolkesicher.de/custom/clientarea.php?action=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1439536.jpg",
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
        entryUrl: "https://my.wolkesicher.de/custom/clientarea.php?action=invoices",
    }

    constructor() {
        super(WolkesicherDeCollector.CONFIG);
    }
}
