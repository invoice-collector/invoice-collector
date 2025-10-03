
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RedVolcanoCollector extends SketchCollector {

    static CONFIG = {
        id: "red_volcano",
        name: "Red Volcano",
        description: "i18n.collectors.red_volcano.description",
        version: "0",
        website: "https://magma.redvolcano.uk/pages/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2525620.jpg",
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
        entryUrl: "https://magma.redvolcano.uk/pages/login.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RedVolcanoCollector.CONFIG);
    }
}
