
import { SketchCollector } from '../../sketchCollector';

export class BouyguesEntreprisesCollector extends SketchCollector {

    static CONFIG = {
        id: "bouygues_entreprises",
        name: "Bouygues Entreprises",
        description: "i18n.collectors.bouygues_entreprises.description",
        version: "0",
        website: "https://cas.bouyguestelecom-entreprises.fr/cas/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/222130.jpg",
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
        entryUrl: "https://cas.bouyguestelecom-entreprises.fr/cas/login",
    }

    constructor() {
        super(BouyguesEntreprisesCollector.CONFIG);
    }
}
