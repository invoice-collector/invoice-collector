
import { SketchCollector } from '../../sketchCollector';

export class SanityCollector extends SketchCollector {

    static CONFIG = {
        id: "sanity",
        name: "Sanity",
        description: "i18n.collectors.sanity.description",
        version: "0",
        website: "https://www.sanity.io/organizations/ovKGesWLZ/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1037315.jpg",
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
        entryUrl: "https://www.sanity.io/organizations/ovKGesWLZ/billing",
    }

    constructor() {
        super(SanityCollector.CONFIG);
    }
}
