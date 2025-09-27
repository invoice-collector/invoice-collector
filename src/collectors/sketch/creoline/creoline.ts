
import { SketchCollector } from '../../sketchCollector';

export class CreolineCollector extends SketchCollector {

    static CONFIG = {
        id: "creoline",
        name: "creoline",
        description: "i18n.collectors.creoline.description",
        version: "0",
        website: "https://account.creoline.de/auth/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/782555.jpg",
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
        entryUrl: "https://account.creoline.de/auth/login/",
    }

    constructor() {
        super(CreolineCollector.CONFIG);
    }
}
