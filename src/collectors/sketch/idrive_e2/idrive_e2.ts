
import { SketchCollector } from '../../sketchCollector';

export class IdriveE2Collector extends SketchCollector {

    static CONFIG = {
        id: "idrive_e2",
        name: "iDrive e2",
        description: "i18n.collectors.idrive_e2.description",
        version: "0",
        website: "https://app.idrivee2.com/account-info/billing-overview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973187.jpg",
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
        entryUrl: "https://app.idrivee2.com/account-info/billing-overview",
    }

    constructor() {
        super(IdriveE2Collector.CONFIG);
    }
}
