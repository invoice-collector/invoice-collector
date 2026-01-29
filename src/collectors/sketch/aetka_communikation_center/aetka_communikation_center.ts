
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AetkaCommunikationCenterCollector extends SketchCollector {

    static CONFIG = {
        id: "aetka_communikation_center",
        name: "aetka Communikation Center",
        description: "i18n.collectors.aetka_communikation_center.description",
        version: "0",
        website: "https://karlo.de/Shop/OrderManagement/Vouchers#?documentType=invoice&documentKind=all&page=1&minDocumentDate=2019-03-21T13:23:04.7288619%2B01:00&maxDocumentDate=2019-05-21T13:23:04.7288619%2B02:00",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/131764.jpg",
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
        loginUrl: "https://karlo.de/Shop/OrderManagement/Vouchers#?documentType=invoice&documentKind=all&page=1&minDocumentDate=2019-03-21T13:23:04.7288619%2B01:00&maxDocumentDate=2019-05-21T13:23:04.7288619%2B02:00",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AetkaCommunikationCenterCollector.CONFIG);
    }
}
