
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeElmshornCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_elmshorn",
        name: "Stadtwerke Elmshorn",
        description: "i18n.collectors.stadtwerke_elmshorn.description",
        version: "0",
        website: "https://service.stadtwerke-elmshorn.de/bkp/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1271380.jpg",
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
        entryUrl: "https://service.stadtwerke-elmshorn.de/bkp/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeElmshornCollector.CONFIG);
    }
}
