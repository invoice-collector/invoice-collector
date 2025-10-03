
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeKielFirmenkundenCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_kiel_firmenkunden",
        name: "Stadtwerke Kiel Firmenkunden",
        description: "i18n.collectors.stadtwerke_kiel_firmenkunden.description",
        version: "0",
        website: "https://kundenportal.stadtwerke-kiel.de/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4450018.jpg",
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
        entryUrl: "https://kundenportal.stadtwerke-kiel.de/home",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeKielFirmenkundenCollector.CONFIG);
    }
}
