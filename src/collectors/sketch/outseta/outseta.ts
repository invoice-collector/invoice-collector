
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OutsetaCollector extends SketchCollector {

    static CONFIG = {
        id: "outseta",
        name: "Outseta",
        description: "i18n.collectors.outseta.description",
        version: "0",
        website: "https://oao.outseta.com/#/app/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131399.jpg",
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
        entryUrl: "https://oao.outseta.com/#/app/dashboard",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OutsetaCollector.CONFIG);
    }
}
