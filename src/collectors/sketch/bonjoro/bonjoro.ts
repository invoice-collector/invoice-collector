
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BonjoroCollector extends SketchCollector {

    static CONFIG = {
        id: "bonjoro",
        name: "Bonjoro",
        description: "i18n.collectors.bonjoro.description",
        version: "0",
        website: "https://www.bonjoro.com/auth/login?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50461.jpg",
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
        entryUrl: "https://www.bonjoro.com/auth/login?",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BonjoroCollector.CONFIG);
    }
}
