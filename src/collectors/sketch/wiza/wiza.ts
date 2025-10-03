
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WizaCollector extends SketchCollector {

    static CONFIG = {
        id: "wiza",
        name: "WIZA",
        description: "i18n.collectors.wiza.description",
        version: "0",
        website: "https://wiza.co/?xsln5i53hj2e7a7rjwjumiuhoa=suxroadeng6eyg3n7a32nmkrlq",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1239206.jpg",
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
        entryUrl: "https://wiza.co/?xsln5i53hj2e7a7rjwjumiuhoa=suxroadeng6eyg3n7a32nmkrlq",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WizaCollector.CONFIG);
    }
}
