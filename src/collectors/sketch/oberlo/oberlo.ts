
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OberloCollector extends SketchCollector {

    static CONFIG = {
        id: "oberlo",
        name: "Oberlo",
        description: "i18n.collectors.oberlo.description",
        version: "0",
        website: "https://app.oberlo.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32797.jpg",
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
        entryUrl: "https://app.oberlo.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OberloCollector.CONFIG);
    }
}
