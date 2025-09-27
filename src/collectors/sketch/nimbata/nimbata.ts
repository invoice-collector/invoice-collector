
import { SketchCollector } from '../../sketchCollector';

export class NimbataCollector extends SketchCollector {

    static CONFIG = {
        id: "nimbata",
        name: "Nimbata",
        description: "i18n.collectors.nimbata.description",
        version: "0",
        website: "https://app.nimbata.com/account/plans-and-billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4220424.jpg",
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
        entryUrl: "https://app.nimbata.com/account/plans-and-billing",
    }

    constructor() {
        super(NimbataCollector.CONFIG);
    }
}
