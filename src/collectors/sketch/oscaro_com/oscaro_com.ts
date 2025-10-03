
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OscaroComCollector extends SketchCollector {

    static CONFIG = {
        id: "oscaro_com",
        name: "Oscaro.com",
        description: "i18n.collectors.oscaro_com.description",
        version: "0",
        website: "https://www.oscaro.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122628.jpg",
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
        entryUrl: "https://www.oscaro.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OscaroComCollector.CONFIG);
    }
}
