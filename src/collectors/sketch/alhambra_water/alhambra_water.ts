
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlhambraWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "alhambra_water",
        name: "Alhambra Water",
        description: "i18n.collectors.alhambra_water.description",
        version: "0",
        website: "https://drink.alhambrawater.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/153982.jpg",
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
        entryUrl: "https://drink.alhambrawater.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlhambraWaterCollector.CONFIG);
    }
}
