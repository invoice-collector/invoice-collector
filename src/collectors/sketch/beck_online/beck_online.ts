
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BeckOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "beck_online",
        name: "beck-online",
        description: "i18n.collectors.beck_online.description",
        version: "0",
        website: "https://beck-online.beck.de/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2123187.jpg",
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
        entryUrl: "https://beck-online.beck.de/Login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BeckOnlineCollector.CONFIG);
    }
}
