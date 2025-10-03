
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EniComCollector extends SketchCollector {

    static CONFIG = {
        id: "eni_com",
        name: "eni.com",
        description: "i18n.collectors.eni_com.description",
        version: "0",
        website: "http://www.eni.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8904.jpg",
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
        entryUrl: "http://www.eni.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EniComCollector.CONFIG);
    }
}
