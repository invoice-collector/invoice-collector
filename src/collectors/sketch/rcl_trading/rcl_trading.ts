
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RclTradingCollector extends SketchCollector {

    static CONFIG = {
        id: "rcl_trading",
        name: "RCL Trading",
        description: "i18n.collectors.rcl_trading.description",
        version: "0",
        website: "www.rcltrading.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/413551.jpg",
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
        entryUrl: "www.rcltrading.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RclTradingCollector.CONFIG);
    }
}
