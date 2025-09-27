
import { SketchCollector } from '../../sketchCollector';

export class TolgeeCollector extends SketchCollector {

    static CONFIG = {
        id: "tolgee",
        name: "Tolgee",
        description: "i18n.collectors.tolgee.description",
        version: "0",
        website: "https://app.tolgee.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200800.jpg",
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
        entryUrl: "https://app.tolgee.io/login",
    }

    constructor() {
        super(TolgeeCollector.CONFIG);
    }
}
