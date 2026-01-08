
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VodafoneRechnungenCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_rechnungen",
        name: "Vodafone Rechnungen",
        description: "i18n.collectors.vodafone_rechnungen.description",
        version: "0",
        website: "https://webbill.vodafone.de/vf/getInvoice.wb?singleBillIndex=001049733044000000368085913520221108",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1488431.jpg",
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
        loginUrl: "https://webbill.vodafone.de/vf/getInvoice.wb?singleBillIndex=001049733044000000368085913520221108",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VodafoneRechnungenCollector.CONFIG);
    }
}
