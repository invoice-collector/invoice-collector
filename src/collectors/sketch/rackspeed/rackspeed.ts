
import { SketchCollector } from '../../sketchCollector';

export class RackspeedCollector extends SketchCollector {

    static CONFIG = {
        id: "rackspeed",
        name: "rackSPEED",
        description: "i18n.collectors.rackspeed.description",
        version: "0",
        website: "https://kunden.rackspeed.de/clientarea.php?action=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26138.jpg",
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
        entryUrl: "https://kunden.rackspeed.de/clientarea.php?action=invoices",
    }

    constructor() {
        super(RackspeedCollector.CONFIG);
    }
}
