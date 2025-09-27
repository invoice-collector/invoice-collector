
import { SketchCollector } from '../../sketchCollector';

export class AirdnaCollector extends SketchCollector {

    static CONFIG = {
        id: "airdna",
        name: "AirDNA",
        description: "i18n.collectors.airdna.description",
        version: "0",
        website: "https://app.airdna.co/data/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39379.jpg",
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
        entryUrl: "https://app.airdna.co/data/login",
    }

    constructor() {
        super(AirdnaCollector.CONFIG);
    }
}
