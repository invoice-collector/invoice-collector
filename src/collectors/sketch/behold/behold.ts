
import { SketchCollector } from '../../sketchCollector';

export class BeholdCollector extends SketchCollector {

    static CONFIG = {
        id: "behold",
        name: "Behold",
        description: "i18n.collectors.behold.description",
        version: "0",
        website: "https://app.behold.so/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4179032.jpg",
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
        entryUrl: "https://app.behold.so/account",
    }

    constructor() {
        super(BeholdCollector.CONFIG);
    }
}
