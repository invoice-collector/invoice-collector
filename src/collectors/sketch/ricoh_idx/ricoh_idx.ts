
import { SketchCollector } from '../../sketchCollector';

export class RicohIdxCollector extends SketchCollector {

    static CONFIG = {
        id: "ricoh_idx",
        name: "RICOH IDX",
        description: "i18n.collectors.ricoh_idx.description",
        version: "0",
        website: "https://www.ricoh-idx.net/portalv3/Documents/#/Inbox",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2695830.jpg",
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
        entryUrl: "https://www.ricoh-idx.net/portalv3/Documents/#/Inbox",
    }

    constructor() {
        super(RicohIdxCollector.CONFIG);
    }
}
