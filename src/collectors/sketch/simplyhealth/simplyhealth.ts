
import { SketchCollector } from '../../sketchCollector';

export class SimplyhealthCollector extends SketchCollector {

    static CONFIG = {
        id: "simplyhealth",
        name: "SimplyHealth",
        description: "i18n.collectors.simplyhealth.description",
        version: "0",
        website: "https://www.simplyhealth.co.uk/corporate-portal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4381660.jpg",
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
        entryUrl: "https://www.simplyhealth.co.uk/corporate-portal",
    }

    constructor() {
        super(SimplyhealthCollector.CONFIG);
    }
}
