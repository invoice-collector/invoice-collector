
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TlhpCollector extends SketchCollector {

    static CONFIG = {
        id: "tlhp",
        name: "TLHP",
        description: "i18n.collectors.tlhp.description",
        version: "0",
        website: "https://en.toutlehautparleur.com/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200207.jpg",
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
        entryUrl: "https://en.toutlehautparleur.com/customer/account/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TlhpCollector.CONFIG);
    }
}
