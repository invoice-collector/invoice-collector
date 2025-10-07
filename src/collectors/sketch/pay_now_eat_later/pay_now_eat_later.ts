
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PayNowEatLaterCollector extends SketchCollector {

    static CONFIG = {
        id: "pay_now_eat_later",
        name: "PAY NOW EAT LATER",
        description: "i18n.collectors.pay_now_eat_later.description",
        version: "0",
        website: "https://partner.paynoweatlater.de/location/abrechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/899469.jpg",
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
        entryUrl: "https://partner.paynoweatlater.de/location/abrechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PayNowEatLaterCollector.CONFIG);
    }
}
