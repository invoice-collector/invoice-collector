
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LiquidWebCollector extends SketchCollector {

    static CONFIG = {
        id: "liquid_web",
        name: "Liquid Web",
        description: "i18n.collectors.liquid_web.description",
        version: "0",
        website: "https://manage.liquidweb.com/manage/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/48728.jpg",
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
        entryUrl: "https://manage.liquidweb.com/manage/billing/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LiquidWebCollector.CONFIG);
    }
}
