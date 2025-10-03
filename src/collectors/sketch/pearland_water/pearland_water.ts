
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PearlandWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "pearland_water",
        name: "Pearland Water",
        description: "i18n.collectors.pearland_water.description",
        version: "0",
        website: "https://pearlandtx.watersmart.com/index.php/home/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4695938.jpg",
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
        entryUrl: "https://pearlandtx.watersmart.com/index.php/home/index",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PearlandWaterCollector.CONFIG);
    }
}
