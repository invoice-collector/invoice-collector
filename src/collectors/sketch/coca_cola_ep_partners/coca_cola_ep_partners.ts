
import { SketchCollector } from '../../sketchCollector';

export class CocaColaEpPartnersCollector extends SketchCollector {

    static CONFIG = {
        id: "coca_cola_ep_partners",
        name: "Coca-Cola EP Partners",
        description: "i18n.collectors.coca_cola_ep_partners.description",
        version: "0",
        website: "https://www.mycca.com.au/ccrz__CCPage?pageKey=homepage&cclcl=en_AU",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/842344.jpg",
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
        entryUrl: "https://www.mycca.com.au/ccrz__CCPage?pageKey=homepage&cclcl=en_AU",
    }

    constructor() {
        super(CocaColaEpPartnersCollector.CONFIG);
    }
}
