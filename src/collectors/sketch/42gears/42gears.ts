
import { SketchCollector } from '../../sketchCollector';

export class _42gearsCollector extends SketchCollector {

    static CONFIG = {
        id: "42gears",
        name: "42Gears",
        description: "i18n.collectors.42gears.description",
        version: "0",
        website: "https://www.billingportal.com/s/42gears-store/statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/187228.jpg",
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
        entryUrl: "https://www.billingportal.com/s/42gears-store/statements",
    }

    constructor() {
        super(_42gearsCollector.CONFIG);
    }
}
