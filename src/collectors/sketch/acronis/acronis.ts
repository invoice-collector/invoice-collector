
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AcronisCollector extends SketchCollector {

    static CONFIG = {
        id: "acronis",
        name: "Acronis",
        description: "i18n.collectors.acronis.description",
        version: "0",
        website: "https://www.acronis.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1232539.jpg",
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
        entryUrl: "https://www.acronis.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AcronisCollector.CONFIG);
    }
}
