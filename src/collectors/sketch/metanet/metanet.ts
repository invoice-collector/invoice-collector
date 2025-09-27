
import { SketchCollector } from '../../sketchCollector';

export class MetanetCollector extends SketchCollector {

    static CONFIG = {
        id: "metanet",
        name: "METANET",
        description: "i18n.collectors.metanet.description",
        version: "0",
        website: "https://www.metanet.ch/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/524585.jpg",
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
        entryUrl: "https://www.metanet.ch/",
    }

    constructor() {
        super(MetanetCollector.CONFIG);
    }
}
