
import { SketchCollector } from '../../sketchCollector';

export class LagrowthmachineCollector extends SketchCollector {

    static CONFIG = {
        id: "lagrowthmachine",
        name: "LaGrowthMachine",
        description: "i18n.collectors.lagrowthmachine.description",
        version: "0",
        website: "https://app.lagrowthmachine.com/campaigns",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1183966.jpg",
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
        entryUrl: "https://app.lagrowthmachine.com/campaigns",
    }

    constructor() {
        super(LagrowthmachineCollector.CONFIG);
    }
}
