
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CamlogCollector extends SketchCollector {

    static CONFIG = {
        id: "camlog",
        name: "camlog",
        description: "i18n.collectors.camlog.description",
        version: "0",
        website: "https://eshop.camlog.de/bestellhistorie/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2705614.jpg",
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
        entryUrl: "https://eshop.camlog.de/bestellhistorie/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CamlogCollector.CONFIG);
    }
}
