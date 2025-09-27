
import { SketchCollector } from '../../sketchCollector';

export class EpisodCollector extends SketchCollector {

    static CONFIG = {
        id: "episod",
        name: "EPISOD",
        description: "i18n.collectors.episod.description",
        version: "0",
        website: "https://www.episod.com/mon-compte/achats/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3377901.jpg",
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
        entryUrl: "https://www.episod.com/mon-compte/achats/",
    }

    constructor() {
        super(EpisodCollector.CONFIG);
    }
}
