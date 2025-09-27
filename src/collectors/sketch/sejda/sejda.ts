
import { SketchCollector } from '../../sketchCollector';

export class SejdaCollector extends SketchCollector {

    static CONFIG = {
        id: "sejda",
        name: "Sejda",
        description: "i18n.collectors.sejda.description",
        version: "0",
        website: "https://www.sejda.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/860261.jpg",
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
        entryUrl: "https://www.sejda.com/account",
    }

    constructor() {
        super(SejdaCollector.CONFIG);
    }
}
