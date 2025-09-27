
import { SketchCollector } from '../../sketchCollector';

export class DoumercPneusInternationnalCollector extends SketchCollector {

    static CONFIG = {
        id: "doumerc_pneus_internationnal",
        name: "Doumerc Pneus Internationnal",
        description: "i18n.collectors.doumerc_pneus_internationnal.description",
        version: "0",
        website: "https://www.doumercpneus.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118638.jpg",
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
        entryUrl: "https://www.doumercpneus.net/",
    }

    constructor() {
        super(DoumercPneusInternationnalCollector.CONFIG);
    }
}
