
import { SketchCollector } from '../../sketchCollector';

export class SavvycalCollector extends SketchCollector {

    static CONFIG = {
        id: "savvycal",
        name: "SavvyCal",
        description: "i18n.collectors.savvycal.description",
        version: "0",
        website: "https://savvycal.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2859108.jpg",
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
        entryUrl: "https://savvycal.com/login",
    }

    constructor() {
        super(SavvycalCollector.CONFIG);
    }
}
