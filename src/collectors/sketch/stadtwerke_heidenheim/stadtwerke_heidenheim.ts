
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeHeidenheimCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_heidenheim",
        name: "Stadtwerke Heidenheim",
        description: "i18n.collectors.stadtwerke_heidenheim.description",
        version: "0",
        website: "https://kundenportal.stadtwerke-heidenheim.de/kundenportal/exec/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1941420.jpg",
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
        entryUrl: "https://kundenportal.stadtwerke-heidenheim.de/kundenportal/exec/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeHeidenheimCollector.CONFIG);
    }
}
