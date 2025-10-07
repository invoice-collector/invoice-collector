
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShirtigoCockpitCollector extends SketchCollector {

    static CONFIG = {
        id: "shirtigo_cockpit",
        name: "Shirtigo Cockpit",
        description: "i18n.collectors.shirtigo_cockpit.description",
        version: "0",
        website: "https://cockpit.shirtigo.de/app/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69033.jpg",
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
        entryUrl: "https://cockpit.shirtigo.de/app/payments",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShirtigoCockpitCollector.CONFIG);
    }
}
