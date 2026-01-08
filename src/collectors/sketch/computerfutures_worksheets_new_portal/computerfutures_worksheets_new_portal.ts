
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ComputerfuturesWorksheetsNewPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "computerfutures_worksheets_new_portal",
        name: "ComputerFutures Worksheets - New Portal",
        description: "i18n.collectors.computerfutures_worksheets_new_portal.description",
        version: "0",
        website: "https://sthree.force.com/contractor/s/invoices-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106194.jpg",
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
        loginUrl: "https://sthree.force.com/contractor/s/invoices-history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ComputerfuturesWorksheetsNewPortalCollector.CONFIG);
    }
}
