
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeMarburgCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_marburg",
        name: "Stadtwerke Marburg",
        description: "i18n.collectors.stadtwerke_marburg.description",
        version: "0",
        website: "http://stadtwerke-marburg.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9240.jpg",
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
        entryUrl: "http://stadtwerke-marburg.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeMarburgCollector.CONFIG);
    }
}
