
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ELiquideComCollector extends SketchCollector {

    static CONFIG = {
        id: "e_liquide_com",
        name: "E-liquide.com",
        description: "i18n.collectors.e_liquide_com.description",
        version: "0",
        website: "https://www.e-liquide.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118627.jpg",
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
        entryUrl: "https://www.e-liquide.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ELiquideComCollector.CONFIG);
    }
}
