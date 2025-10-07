
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeDuisburgCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_duisburg",
        name: "Stadtwerke Duisburg",
        description: "i18n.collectors.stadtwerke_duisburg.description",
        version: "0",
        website: "https://mein.swdu.de/postbox",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1079848.jpg",
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
        entryUrl: "https://mein.swdu.de/postbox",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeDuisburgCollector.CONFIG);
    }
}
