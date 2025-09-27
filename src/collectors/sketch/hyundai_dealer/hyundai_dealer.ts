
import { SketchCollector } from '../../sketchCollector';

export class HyundaiDealerCollector extends SketchCollector {

    static CONFIG = {
        id: "hyundai_dealer",
        name: "Hyundai Dealer",
        description: "i18n.collectors.hyundai_dealer.description",
        version: "0",
        website: "https://wdcs.hyundaidealer.com/irj/portal/webdcs#/app_currentReport",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4590487.jpg",
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
        entryUrl: "https://wdcs.hyundaidealer.com/irj/portal/webdcs#/app_currentReport",
    }

    constructor() {
        super(HyundaiDealerCollector.CONFIG);
    }
}
