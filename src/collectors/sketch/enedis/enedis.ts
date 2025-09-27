
import { SketchCollector } from '../../sketchCollector';

export class EnedisCollector extends SketchCollector {

    static CONFIG = {
        id: "enedis",
        name: "ENEDIS",
        description: "i18n.collectors.enedis.description",
        version: "0",
        website: "https://mon-compte-entreprise.enedis.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1526369.jpg",
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
        entryUrl: "https://mon-compte-entreprise.enedis.fr/",
    }

    constructor() {
        super(EnedisCollector.CONFIG);
    }
}
