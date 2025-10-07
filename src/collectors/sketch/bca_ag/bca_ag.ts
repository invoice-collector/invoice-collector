
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BcaAgCollector extends SketchCollector {

    static CONFIG = {
        id: "bca_ag",
        name: "BCA AG",
        description: "i18n.collectors.bca_ag.description",
        version: "0",
        website: "https://diva.bca.de/#/Organizer/Postfach",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/226576.jpg",
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
        entryUrl: "https://diva.bca.de/#/Organizer/Postfach",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BcaAgCollector.CONFIG);
    }
}
