
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeAugsburgCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_augsburg",
        name: "Stadtwerke Augsburg",
        description: "i18n.collectors.stadtwerke_augsburg.description",
        version: "0",
        website: "https://onlineservice.sw-augsburg.de/powercommerce5/swa/fo/portal/professional",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/91233.jpg",
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
        entryUrl: "https://onlineservice.sw-augsburg.de/powercommerce5/swa/fo/portal/professional",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeAugsburgCollector.CONFIG);
    }
}
