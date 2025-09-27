
import { SketchCollector } from '../../sketchCollector';

export class TntFrCollector extends SketchCollector {

    static CONFIG = {
        id: "tnt_fr",
        name: "TNT(fr)",
        description: "i18n.collectors.tnt_fr.description",
        version: "0",
        website: "https://www.tnt.fr/mytnt/index.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/504794.jpg",
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
        entryUrl: "https://www.tnt.fr/mytnt/index.do",
    }

    constructor() {
        super(TntFrCollector.CONFIG);
    }
}
