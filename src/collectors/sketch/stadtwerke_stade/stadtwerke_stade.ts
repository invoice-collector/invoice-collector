
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeStadeCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_stade",
        name: "Stadtwerke Stade",
        description: "i18n.collectors.stadtwerke_stade.description",
        version: "0",
        website: "https://swscsit.stadtwerke-stade.de/csit/action/csLogin?formReset.x=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/549052.jpg",
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
        entryUrl: "https://swscsit.stadtwerke-stade.de/csit/action/csLogin?formReset.x=true",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeStadeCollector.CONFIG);
    }
}
