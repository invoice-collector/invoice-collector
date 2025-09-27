
import { SketchCollector } from '../../sketchCollector';

export class LesEchosCollector extends SketchCollector {

    static CONFIG = {
        id: "les_echos",
        name: "Les Echos",
        description: "i18n.collectors.les_echos.description",
        version: "0",
        website: "https://www.lesechos.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/819975.jpg",
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
        entryUrl: "https://www.lesechos.fr/",
    }

    constructor() {
        super(LesEchosCollector.CONFIG);
    }
}
