
import { SketchCollector } from '../../sketchCollector';

export class MutuellePrevadiesCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_prevadies",
        name: "Mutuelle Prevadies",
        description: "i18n.collectors.mutuelle_prevadies.description",
        version: "0",
        website: "https://www.harmonie-mutuelle.fr/web/tout-harmonie#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130350.jpg",
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
        entryUrl: "https://www.harmonie-mutuelle.fr/web/tout-harmonie#",
    }

    constructor() {
        super(MutuellePrevadiesCollector.CONFIG);
    }
}
