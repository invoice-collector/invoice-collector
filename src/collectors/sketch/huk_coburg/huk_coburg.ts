
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HukCoburgCollector extends SketchCollector {

    static CONFIG = {
        id: "huk_coburg",
        name: "HUK-COBURG",
        description: "i18n.collectors.huk_coburg.description",
        version: "0",
        website: "https://www.huk.de/login.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18492.jpg",
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
        entryUrl: "https://www.huk.de/login.do",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HukCoburgCollector.CONFIG);
    }
}
