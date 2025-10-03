
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HellosignCollector extends SketchCollector {

    static CONFIG = {
        id: "hellosign",
        name: "HelloSign",
        description: "i18n.collectors.hellosign.description",
        version: "0",
        website: "https://app.hellosign.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6715.jpg",
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
        entryUrl: "https://app.hellosign.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HellosignCollector.CONFIG);
    }
}
