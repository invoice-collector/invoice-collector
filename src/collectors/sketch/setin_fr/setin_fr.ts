
import { SketchCollector } from '../../sketchCollector';

export class SetinFrCollector extends SketchCollector {

    static CONFIG = {
        id: "setin_fr",
        name: "Setin FR",
        description: "i18n.collectors.setin_fr.description",
        version: "0",
        website: "https://www.setin.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778930.jpg",
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
        entryUrl: "https://www.setin.fr/",
    }

    constructor() {
        super(SetinFrCollector.CONFIG);
    }
}
