
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VinMalinCollector extends SketchCollector {

    static CONFIG = {
        id: "vin_malin",
        name: "Vin Malin",
        description: "i18n.collectors.vin_malin.description",
        version: "0",
        website: "https://www.vin-malin.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124847.jpg",
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
        entryUrl: "https://www.vin-malin.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VinMalinCollector.CONFIG);
    }
}
