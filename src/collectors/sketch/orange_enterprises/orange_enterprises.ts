
import { SketchCollector } from '../../sketchCollector';

export class OrangeEnterprisesCollector extends SketchCollector {

    static CONFIG = {
        id: "orange_enterprises",
        name: "Orange Enterprises",
        description: "i18n.collectors.orange_enterprises.description",
        version: "0",
        website: "http://www.orange-business.com/ece",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/238947.jpg",
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
        entryUrl: "http://www.orange-business.com/ece",
    }

    constructor() {
        super(OrangeEnterprisesCollector.CONFIG);
    }
}
