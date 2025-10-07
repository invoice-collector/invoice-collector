
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FloridaPowerAndLightCollector extends SketchCollector {

    static CONFIG = {
        id: "florida_power_and_light",
        name: "Florida Power & Light",
        description: "i18n.collectors.florida_power_and_light.description",
        version: "0",
        website: "https://www.fpl.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8776.jpg",
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
        entryUrl: "https://www.fpl.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FloridaPowerAndLightCollector.CONFIG);
    }
}
