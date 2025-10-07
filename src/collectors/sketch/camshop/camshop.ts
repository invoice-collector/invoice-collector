
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CamshopCollector extends SketchCollector {

    static CONFIG = {
        id: "camshop",
        name: "CAMSHOP",
        description: "i18n.collectors.camshop.description",
        version: "0",
        website: "https://www.camshop.fr/module/kcpscamshotmyaccountdolibarr/linkdolibarr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1313053.jpg",
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
        entryUrl: "https://www.camshop.fr/module/kcpscamshotmyaccountdolibarr/linkdolibarr",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CamshopCollector.CONFIG);
    }
}
