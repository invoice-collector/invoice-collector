
import { SketchCollector } from '../../sketchCollector';

export class IbmCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "ibm_cloud",
        name: "IBM Cloud",
        description: "i18n.collectors.ibm_cloud.description",
        version: "0",
        website: "https://cloud.ibm.com/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/160728.jpg",
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
        entryUrl: "https://cloud.ibm.com/billing/invoices",
    }

    constructor() {
        super(IbmCloudCollector.CONFIG);
    }
}
