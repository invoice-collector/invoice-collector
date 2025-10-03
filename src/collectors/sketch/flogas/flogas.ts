
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FlogasCollector extends SketchCollector {

    static CONFIG = {
        id: "flogas",
        name: "Flogas",
        description: "i18n.collectors.flogas.description",
        version: "0",
        website: "https://myaccount.flogas.co.uk/overview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863966.jpg",
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
        entryUrl: "https://myaccount.flogas.co.uk/overview",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlogasCollector.CONFIG);
    }
}
