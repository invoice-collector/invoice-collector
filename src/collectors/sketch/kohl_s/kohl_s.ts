
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KohlSCollector extends SketchCollector {

    static CONFIG = {
        id: "kohl_s",
        name: "Kohl\'s",
        description: "i18n.collectors.kohl_s.description",
        version: "0",
        website: "https://www.kohls.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9373.jpg",
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
        entryUrl: "https://www.kohls.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KohlSCollector.CONFIG);
    }
}
