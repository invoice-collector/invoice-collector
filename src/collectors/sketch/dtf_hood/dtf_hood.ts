
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DtfHoodCollector extends SketchCollector {

    static CONFIG = {
        id: "dtf_hood",
        name: "DTF-Hood",
        description: "i18n.collectors.dtf_hood.description",
        version: "0",
        website: "https://www.dtfhood.de/my-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4375440.jpg",
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
        entryUrl: "https://www.dtfhood.de/my-account/orders/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DtfHoodCollector.CONFIG);
    }
}
