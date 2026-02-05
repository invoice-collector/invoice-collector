
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeMunsterBispingenCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_munster_bispingen",
        name: "Stadtwerke Munster-Bispingen",
        description: "i18n.collectors.stadtwerke_munster_bispingen.description",
        version: "0",
        website: "https://kundenportal.ihr-stadtwerk.de/powercommerce/ivu/fo/portal/invoiceView?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1340279.jpg",
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
        loginUrl: "https://kundenportal.ihr-stadtwerk.de/powercommerce/ivu/fo/portal/invoiceView?",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StadtwerkeMunsterBispingenCollector.CONFIG);
    }
}
