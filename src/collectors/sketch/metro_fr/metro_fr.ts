
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MetroFrCollector extends SketchCollector {

    static CONFIG = {
        id: "metro_fr",
        name: "Metro.fr",
        description: "i18n.collectors.metro_fr.description",
        version: "0",
        website: "https://shop.metro.fr/shop/portal/overview/my-cmr-statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/112535.jpg",
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
        entryUrl: "https://shop.metro.fr/shop/portal/overview/my-cmr-statements",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MetroFrCollector.CONFIG);
    }
}
