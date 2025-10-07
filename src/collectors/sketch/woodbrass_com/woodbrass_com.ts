
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WoodbrassComCollector extends SketchCollector {

    static CONFIG = {
        id: "woodbrass_com",
        name: "Woodbrass.com",
        description: "i18n.collectors.woodbrass_com.description",
        version: "0",
        website: "https://www.woodbrass.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124017.jpg",
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
        entryUrl: "https://www.woodbrass.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WoodbrassComCollector.CONFIG);
    }
}
