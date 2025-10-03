
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TrivagoComCollector extends SketchCollector {

    static CONFIG = {
        id: "trivago_com",
        name: "Trivago.com",
        description: "i18n.collectors.trivago_com.description",
        version: "0",
        website: "https://www.trivago.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/747731.jpg",
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
        entryUrl: "https://www.trivago.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TrivagoComCollector.CONFIG);
    }
}
