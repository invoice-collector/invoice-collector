
import { SketchCollector } from '../../sketchCollector';

export class AlleaktienCollector extends SketchCollector {

    static CONFIG = {
        id: "alleaktien",
        name: "AlleAktien",
        description: "i18n.collectors.alleaktien.description",
        version: "0",
        website: "https://www.alleaktien.de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1668073.jpg",
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
        entryUrl: "https://www.alleaktien.de/account",
    }

    constructor() {
        super(AlleaktienCollector.CONFIG);
    }
}
