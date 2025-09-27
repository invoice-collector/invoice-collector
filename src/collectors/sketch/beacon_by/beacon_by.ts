
import { SketchCollector } from '../../sketchCollector';

export class BeaconByCollector extends SketchCollector {

    static CONFIG = {
        id: "beacon_by",
        name: "Beacon.by",
        description: "i18n.collectors.beacon_by.description",
        version: "0",
        website: "https://beacon.by/dashboard/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4439643.jpg",
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
        entryUrl: "https://beacon.by/dashboard/invoices",
    }

    constructor() {
        super(BeaconByCollector.CONFIG);
    }
}
