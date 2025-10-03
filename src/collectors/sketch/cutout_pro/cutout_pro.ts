
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CutoutProCollector extends SketchCollector {

    static CONFIG = {
        id: "cutout_pro",
        name: "Cutout Pro",
        description: "i18n.collectors.cutout_pro.description",
        version: "0",
        website: "https://www.cutout.pro/user/payment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2716240.jpg",
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
        entryUrl: "https://www.cutout.pro/user/payment",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CutoutProCollector.CONFIG);
    }
}
