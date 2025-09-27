
import { SketchCollector } from '../../sketchCollector';

export class SkeddaCollector extends SketchCollector {

    static CONFIG = {
        id: "skedda",
        name: "Skedda",
        description: "i18n.collectors.skedda.description",
        version: "0",
        website: "https://app.skedda.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1132285.jpg",
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
        entryUrl: "https://app.skedda.com/account/login",
    }

    constructor() {
        super(SkeddaCollector.CONFIG);
    }
}
