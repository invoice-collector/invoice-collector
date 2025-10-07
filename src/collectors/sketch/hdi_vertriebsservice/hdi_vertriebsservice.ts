
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HdiVertriebsserviceCollector extends SketchCollector {

    static CONFIG = {
        id: "hdi_vertriebsservice",
        name: "HDI Vertriebsservice",
        description: "i18n.collectors.hdi_vertriebsservice.description",
        version: "0",
        website: "https://vertriebsservice.hdi-gerling.de/content/public/de/common/index.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115651.jpg",
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
        entryUrl: "https://vertriebsservice.hdi-gerling.de/content/public/de/common/index.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HdiVertriebsserviceCollector.CONFIG);
    }
}
