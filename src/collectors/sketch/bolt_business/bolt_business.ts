
import { SketchCollector } from '../../sketchCollector';

export class BoltBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "bolt_business",
        name: "Bolt Business",
        description: "i18n.collectors.bolt_business.description",
        version: "0",
        website: "https://business.bolt.eu/login?utm_campaign=bolt-business&utm_medium=navbar&utm_source=business-welcome",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1763975.jpg",
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
        entryUrl: "https://business.bolt.eu/login?utm_campaign=bolt-business&utm_medium=navbar&utm_source=business-welcome",
    }

    constructor() {
        super(BoltBusinessCollector.CONFIG);
    }
}
