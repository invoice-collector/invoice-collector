
import { SketchCollector } from '../../sketchCollector';

export class FloridaNaturalGasCollector extends SketchCollector {

    static CONFIG = {
        id: "florida_natural_gas",
        name: "Florida Natural Gas",
        description: "i18n.collectors.florida_natural_gas.description",
        version: "0",
        website: "https://click.onlyfng.com/BillingHistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723587.jpg",
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
        entryUrl: "https://click.onlyfng.com/BillingHistory",
    }

    constructor() {
        super(FloridaNaturalGasCollector.CONFIG);
    }
}
