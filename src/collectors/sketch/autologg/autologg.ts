
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AutologgCollector extends SketchCollector {

    static CONFIG = {
        id: "autologg",
        name: "autologg",
        description: "i18n.collectors.autologg.description",
        version: "0",
        website: "https://www.autologg.com/mein-konto/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1920133.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.autologg.com/mein-konto/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AutologgCollector.CONFIG);
    }
}
