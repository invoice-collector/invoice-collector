
import { SketchCollector } from '../../sketchCollector';

export class KsAutoglasCollector extends SketchCollector {

    static CONFIG = {
        id: "ks_autoglas",
        name: "KS AutoGlas",
        description: "i18n.collectors.ks_autoglas.description",
        version: "0",
        website: "https://www.ks-partnersystem.de/FranchiseDocumentManagement?WindowId=1696cd77-7653-4467-9e4d-27835714f0fc",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/187229.jpg",
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
        entryUrl: "https://www.ks-partnersystem.de/FranchiseDocumentManagement?WindowId=1696cd77-7653-4467-9e4d-27835714f0fc",
    }

    constructor() {
        super(KsAutoglasCollector.CONFIG);
    }
}
