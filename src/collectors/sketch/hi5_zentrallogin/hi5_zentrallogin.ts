
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Hi5ZentralloginCollector extends SketchCollector {

    static CONFIG = {
        id: "hi5_zentrallogin",
        name: "Hi5 Zentrallogin",
        description: "i18n.collectors.hi5_zentrallogin.description",
        version: "0",
        website: "https://zentrallogin.hi5dev.de/contracts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/413555.jpg",
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
        entryUrl: "https://zentrallogin.hi5dev.de/contracts",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Hi5ZentralloginCollector.CONFIG);
    }
}
