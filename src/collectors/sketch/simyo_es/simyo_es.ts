
import { SketchCollector } from '../../sketchCollector';

export class SimyoEsCollector extends SketchCollector {

    static CONFIG = {
        id: "simyo_es",
        name: "Simyo (.es)",
        description: "i18n.collectors.simyo_es.description",
        version: "0",
        website: "https://www.simyo.es",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1126183.jpg",
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
        entryUrl: "https://www.simyo.es",
    }

    constructor() {
        super(SimyoEsCollector.CONFIG);
    }
}
