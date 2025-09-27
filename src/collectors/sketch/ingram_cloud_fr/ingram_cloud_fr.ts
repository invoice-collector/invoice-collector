
import { SketchCollector } from '../../sketchCollector';

export class IngramCloudFrCollector extends SketchCollector {

    static CONFIG = {
        id: "ingram_cloud_fr",
        name: "Ingram Cloud FR",
        description: "i18n.collectors.ingram_cloud_fr.description",
        version: "0",
        website: "https://cp.fr.eu.cloud.im/ccp/v/pa/ccp-billing/invoice?pbaDocumentId=",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1612029.jpg",
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
        entryUrl: "https://cp.fr.eu.cloud.im/ccp/v/pa/ccp-billing/invoice?pbaDocumentId=",
    }

    constructor() {
        super(IngramCloudFrCollector.CONFIG);
    }
}
