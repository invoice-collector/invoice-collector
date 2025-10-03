
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeLippstadtCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_lippstadt",
        name: "Stadtwerke Lippstadt",
        description: "i18n.collectors.stadtwerke_lippstadt.description",
        version: "0",
        website: "https://kundenportal.stadtwerke-lippstadt.de:8082/bkp/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2220344.jpg",
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
        entryUrl: "https://kundenportal.stadtwerke-lippstadt.de:8082/bkp/rechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeLippstadtCollector.CONFIG);
    }
}
