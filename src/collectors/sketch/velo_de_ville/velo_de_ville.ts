
import { SketchCollector } from '../../sketchCollector';

export class VeloDeVilleCollector extends SketchCollector {

    static CONFIG = {
        id: "velo_de_ville",
        name: "VELO DE VILLE",
        description: "i18n.collectors.velo_de_ville.description",
        version: "0",
        website: "https://b2b.velo-de-ville.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/846077.jpg",
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
        entryUrl: "https://b2b.velo-de-ville.com/",
    }

    constructor() {
        super(VeloDeVilleCollector.CONFIG);
    }
}
