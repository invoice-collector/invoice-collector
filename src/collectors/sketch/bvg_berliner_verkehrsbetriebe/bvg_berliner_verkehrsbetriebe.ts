
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BvgBerlinerVerkehrsbetriebeCollector extends SketchCollector {

    static CONFIG = {
        id: "bvg_berliner_verkehrsbetriebe",
        name: "BVG - Berliner Verkehrsbetriebe",
        description: "i18n.collectors.bvg_berliner_verkehrsbetriebe.description",
        version: "0",
        website: "https://shop.bvg.de/index.php/personal_data/orderList/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11191.jpg",
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
        entryUrl: "https://shop.bvg.de/index.php/personal_data/orderList/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BvgBerlinerVerkehrsbetriebeCollector.CONFIG);
    }
}
