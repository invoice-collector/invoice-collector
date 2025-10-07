
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GdBoBalconsCollector extends SketchCollector {

    static CONFIG = {
        id: "gd_bo_balcons",
        name: "GD Bo Balcons",
        description: "i18n.collectors.gd_bo_balcons.description",
        version: "0",
        website: "https://www.gdbobalcons-shop.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118618.jpg",
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
        entryUrl: "https://www.gdbobalcons-shop.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GdBoBalconsCollector.CONFIG);
    }
}
