
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DelesignComCollector extends SketchCollector {

    static CONFIG = {
        id: "delesign_com",
        name: "Delesign.com",
        description: "i18n.collectors.delesign_com.description",
        version: "0",
        website: "https://go.delesign.com/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1218059.jpg",
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
        entryUrl: "https://go.delesign.com/sign-in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DelesignComCollector.CONFIG);
    }
}
