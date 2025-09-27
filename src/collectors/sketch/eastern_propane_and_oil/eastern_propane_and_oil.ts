
import { SketchCollector } from '../../sketchCollector';

export class EasternPropaneAndOilCollector extends SketchCollector {

    static CONFIG = {
        id: "eastern_propane_and_oil",
        name: "Eastern Propane & Oil",
        description: "i18n.collectors.eastern_propane_and_oil.description",
        version: "0",
        website: "https://myaccount.eastern.com/accountSummary",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4639881.jpg",
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
        entryUrl: "https://myaccount.eastern.com/accountSummary",
    }

    constructor() {
        super(EasternPropaneAndOilCollector.CONFIG);
    }
}
