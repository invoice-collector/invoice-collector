
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SodetrelMobiliteCollector extends SketchCollector {

    static CONFIG = {
        id: "sodetrel_mobilite",
        name: "Sodetrel Mobilite",
        description: "i18n.collectors.sodetrel_mobilite.description",
        version: "0",
        website: "https://www.sodetrel-mobilite.fr/account/#/monitoring",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75329.jpg",
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
        entryUrl: "https://www.sodetrel-mobilite.fr/account/#/monitoring",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SodetrelMobiliteCollector.CONFIG);
    }
}
