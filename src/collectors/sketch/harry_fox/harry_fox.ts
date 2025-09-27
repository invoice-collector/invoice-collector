
import { SketchCollector } from '../../sketchCollector';

export class HarryFoxCollector extends SketchCollector {

    static CONFIG = {
        id: "harry_fox",
        name: "Harry Fox",
        description: "i18n.collectors.harry_fox.description",
        version: "0",
        website: "https://portal.harryfox.com/auth/login/?return=%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8775.jpg",
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
        entryUrl: "https://portal.harryfox.com/auth/login/?return=%2F",
    }

    constructor() {
        super(HarryFoxCollector.CONFIG);
    }
}
