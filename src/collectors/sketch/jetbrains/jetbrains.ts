
import { SketchCollector } from '../../sketchCollector';

export class JetbrainsCollector extends SketchCollector {

    static CONFIG = {
        id: "jetbrains",
        name: "JetBrains",
        description: "i18n.collectors.jetbrains.description",
        version: "0",
        website: "https://account.jetbrains.com/licenses/transactions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7820.jpg",
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
        entryUrl: "https://account.jetbrains.com/licenses/transactions",
    }

    constructor() {
        super(JetbrainsCollector.CONFIG);
    }
}
