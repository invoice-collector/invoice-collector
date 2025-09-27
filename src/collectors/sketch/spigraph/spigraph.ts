
import { SketchCollector } from '../../sketchCollector';

export class SpigraphCollector extends SketchCollector {

    static CONFIG = {
        id: "spigraph",
        name: "spigraph",
        description: "i18n.collectors.spigraph.description",
        version: "0",
        website: "https://spigraph.valeur-probante.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1092466.jpg",
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
        entryUrl: "https://spigraph.valeur-probante.fr/",
    }

    constructor() {
        super(SpigraphCollector.CONFIG);
    }
}
