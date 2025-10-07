
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ExinCollector extends SketchCollector {

    static CONFIG = {
        id: "exin",
        name: "EXIN",
        description: "i18n.collectors.exin.description",
        version: "0",
        website: "https://mylogin.exin.nl/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/89121.jpg",
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
        entryUrl: "https://mylogin.exin.nl/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ExinCollector.CONFIG);
    }
}
