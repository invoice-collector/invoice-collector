
import { SketchCollector } from '../../sketchCollector';

export class BelfiusLeaseCollector extends SketchCollector {

    static CONFIG = {
        id: "belfius_lease",
        name: "Belfius Lease",
        description: "i18n.collectors.belfius_lease.description",
        version: "0",
        website: "https://iportal.belfius-lease.be/en/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1436870.jpg",
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
        entryUrl: "https://iportal.belfius-lease.be/en/documents",
    }

    constructor() {
        super(BelfiusLeaseCollector.CONFIG);
    }
}
