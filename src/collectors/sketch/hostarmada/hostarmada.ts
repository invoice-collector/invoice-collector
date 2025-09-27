
import { SketchCollector } from '../../sketchCollector';

export class HostarmadaCollector extends SketchCollector {

    static CONFIG = {
        id: "hostarmada",
        name: "HostArmada",
        description: "i18n.collectors.hostarmada.description",
        version: "0",
        website: "https://my.hostarmada.com/clientarea.php?action=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2284730.jpg",
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
        entryUrl: "https://my.hostarmada.com/clientarea.php?action=invoices",
    }

    constructor() {
        super(HostarmadaCollector.CONFIG);
    }
}
