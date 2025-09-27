
import { SketchCollector } from '../../sketchCollector';

export class LoiseletEtDaigremontSyndicCollector extends SketchCollector {

    static CONFIG = {
        id: "loiselet_et_daigremont_syndic",
        name: "Loiselet et Daigremont (Syndic)",
        description: "i18n.collectors.loiselet_et_daigremont_syndic.description",
        version: "0",
        website: "https://www.loiselet-daigremont.com/#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108547.jpg",
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
        entryUrl: "https://www.loiselet-daigremont.com/#",
    }

    constructor() {
        super(LoiseletEtDaigremontSyndicCollector.CONFIG);
    }
}
