
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KiblyCollector extends SketchCollector {

    static CONFIG = {
        id: "kibly",
        name: "Kibly",
        description: "i18n.collectors.kibly.description",
        version: "0",
        website: "https://my.kibly.com/Login?last=Dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/860294.jpg",
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
        entryUrl: "https://my.kibly.com/Login?last=Dashboard",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KiblyCollector.CONFIG);
    }
}
