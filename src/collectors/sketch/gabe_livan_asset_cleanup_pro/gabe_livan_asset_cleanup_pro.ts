
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GabeLivanAssetCleanupProCollector extends SketchCollector {

    static CONFIG = {
        id: "gabe_livan_asset_cleanup_pro",
        name: "Gabe Livan - Asset Cleanup Pro",
        description: "i18n.collectors.gabe_livan_asset_cleanup_pro.description",
        version: "0",
        website: "https://www.gabelivan.com/checkout/purchase-history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1444763.jpg",
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
        entryUrl: "https://www.gabelivan.com/checkout/purchase-history/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GabeLivanAssetCleanupProCollector.CONFIG);
    }
}
