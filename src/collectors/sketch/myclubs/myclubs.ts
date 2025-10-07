
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MyclubsCollector extends SketchCollector {

    static CONFIG = {
        id: "myclubs",
        name: "myClubs",
        description: "i18n.collectors.myclubs.description",
        version: "0",
        website: "https://partner.myclubs.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3197518.jpg",
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
        entryUrl: "https://partner.myclubs.com/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MyclubsCollector.CONFIG);
    }
}
