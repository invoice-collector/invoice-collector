
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DentalbauerDeCollector extends SketchCollector {

    static CONFIG = {
        id: "dentalbauer_de",
        name: "dentalbauer.de",
        description: "i18n.collectors.dentalbauer_de.description",
        version: "0",
        website: "http://www.dentalbauer.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32721.jpg",
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
        entryUrl: "http://www.dentalbauer.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DentalbauerDeCollector.CONFIG);
    }
}
