
import { SketchCollector } from '../../sketchCollector';

export class NatureEtDecouvertesCollector extends SketchCollector {

    static CONFIG = {
        id: "nature_et_decouvertes",
        name: "Nature et decouvertes",
        description: "i18n.collectors.nature_et_decouvertes.description",
        version: "0",
        website: "https://marketplace.natureetdecouvertes.com/mmp/shop/accounting-document/finalized?limit=50&order=DESC&sort=dateCreated",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/131153.jpg",
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
        entryUrl: "https://marketplace.natureetdecouvertes.com/mmp/shop/accounting-document/finalized?limit=50&order=DESC&sort=dateCreated",
    }

    constructor() {
        super(NatureEtDecouvertesCollector.CONFIG);
    }
}
