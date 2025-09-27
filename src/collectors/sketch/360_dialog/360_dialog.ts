
import { SketchCollector } from '../../sketchCollector';

export class _360DialogCollector extends SketchCollector {

    static CONFIG = {
        id: "360_dialog",
        name: "360 Dialog",
        description: "i18n.collectors.360_dialog.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/live_YWNjdF8xR1h2bnZLamtXN0JNSnpSLF9NbnkyRTNRRjBCcjNWTHViTEtMaVZVbWJVSGtKVHVu0100PH0iR6wo",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1488447.jpg",
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
        entryUrl: "https://billing.stripe.com/p/session/live_YWNjdF8xR1h2bnZLamtXN0JNSnpSLF9NbnkyRTNRRjBCcjNWTHViTEtMaVZVbWJVSGtKVHVu0100PH0iR6wo",
    }

    constructor() {
        super(_360DialogCollector.CONFIG);
    }
}
