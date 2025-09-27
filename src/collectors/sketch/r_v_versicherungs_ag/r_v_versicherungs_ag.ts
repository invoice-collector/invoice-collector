
import { SketchCollector } from '../../sketchCollector';

export class RVVersicherungsAgCollector extends SketchCollector {

    static CONFIG = {
        id: "r_v_versicherungs_ag",
        name: "R+V Versicherungs AG",
        description: "i18n.collectors.r_v_versicherungs_ag.description",
        version: "0",
        website: "https://www.ruv.de/meineruv/portal/vertraege",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1109631.jpg",
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
        entryUrl: "https://www.ruv.de/meineruv/portal/vertraege",
    }

    constructor() {
        super(RVVersicherungsAgCollector.CONFIG);
    }
}
