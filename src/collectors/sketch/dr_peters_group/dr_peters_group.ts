
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DrPetersGroupCollector extends SketchCollector {

    static CONFIG = {
        id: "dr_peters_group",
        name: "Dr. Peters Group",
        description: "i18n.collectors.dr_peters_group.description",
        version: "0",
        website: "https://kundenportal.dr-peters.de/meine-beteiligungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863353.jpg",
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
        entryUrl: "https://kundenportal.dr-peters.de/meine-beteiligungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DrPetersGroupCollector.CONFIG);
    }
}
