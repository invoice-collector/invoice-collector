
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GwlCollector extends SketchCollector {

    static CONFIG = {
        id: "gwl",
        name: "GWL",
        description: "i18n.collectors.gwl.description",
        version: "0",
        website: "https://shop.gwl.eu/index.php?cur=1&cl=account_invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2049763.jpg",
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
        entryUrl: "https://shop.gwl.eu/index.php?cur=1&cl=account_invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GwlCollector.CONFIG);
    }
}
