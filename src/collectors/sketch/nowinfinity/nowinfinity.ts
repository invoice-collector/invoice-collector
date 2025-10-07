
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NowinfinityCollector extends SketchCollector {

    static CONFIG = {
        id: "nowinfinity",
        name: "NowInfinity",
        description: "i18n.collectors.nowinfinity.description",
        version: "0",
        website: "https://mria.nowinfinity.com.au/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8871.jpg",
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
        entryUrl: "https://mria.nowinfinity.com.au/#/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NowinfinityCollector.CONFIG);
    }
}
