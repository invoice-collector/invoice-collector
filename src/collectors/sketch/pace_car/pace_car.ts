
import { SketchCollector } from '../../sketchCollector';

export class PaceCarCollector extends SketchCollector {

    static CONFIG = {
        id: "pace_car",
        name: "pace.car",
        description: "i18n.collectors.pace_car.description",
        version: "0",
        website: "https://www.pace.car",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/34501.jpg",
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
        entryUrl: "https://www.pace.car",
    }

    constructor() {
        super(PaceCarCollector.CONFIG);
    }
}
