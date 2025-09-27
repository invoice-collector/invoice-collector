
import { SketchCollector } from '../../sketchCollector';

export class RomamobilitaItCollector extends SketchCollector {

    static CONFIG = {
        id: "romamobilita_it",
        name: "ROMAMOBILITA.IT",
        description: "i18n.collectors.romamobilita_it.description",
        version: "0",
        website: "https://busturistici2019.romamobilita.it/ListaFatture",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1781490.jpg",
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
        entryUrl: "https://busturistici2019.romamobilita.it/ListaFatture",
    }

    constructor() {
        super(RomamobilitaItCollector.CONFIG);
    }
}
