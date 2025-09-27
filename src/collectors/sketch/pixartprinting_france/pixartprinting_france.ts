
import { SketchCollector } from '../../sketchCollector';

export class PixartprintingFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "pixartprinting_france",
        name: "Pixartprinting France",
        description: "i18n.collectors.pixartprinting_france.description",
        version: "0",
        website: "https://www.pixartprinting.fr/espace-perso/commandes-effectuees/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2695455.jpg",
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
        entryUrl: "https://www.pixartprinting.fr/espace-perso/commandes-effectuees/",
    }

    constructor() {
        super(PixartprintingFranceCollector.CONFIG);
    }
}
