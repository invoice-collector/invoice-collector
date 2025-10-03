
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MacwayComCollector extends SketchCollector {

    static CONFIG = {
        id: "macway_com",
        name: "MacWay.com",
        description: "i18n.collectors.macway_com.description",
        version: "0",
        website: "https://www.macway.com/fr/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27331.jpg",
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
        entryUrl: "https://www.macway.com/fr/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MacwayComCollector.CONFIG);
    }
}
