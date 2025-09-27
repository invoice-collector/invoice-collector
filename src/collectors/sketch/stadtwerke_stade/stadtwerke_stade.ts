
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeStadeCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_stade",
        name: "Stadtwerke Stade",
        description: "i18n.collectors.stadtwerke_stade.description",
        version: "0",
        website: "https://swscsit.stadtwerke-stade.de/csit/action/csLogin?formReset.x=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/549052.jpg",
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
    }

    constructor() {
        super(StadtwerkeStadeCollector.CONFIG);
    }
}
