
import { SketchCollector } from '../../sketchCollector';

export class MutavieCollector extends SketchCollector {

    static CONFIG = {
        id: "mutavie",
        name: "Mutavie",
        description: "i18n.collectors.mutavie.description",
        version: "0",
        website: "https://www.macif.fr/assurance/particuliers/vos-espaces-macif",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107887.jpg",
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
        entryUrl: "https://www.macif.fr/assurance/particuliers/vos-espaces-macif",
    }

    constructor() {
        super(MutavieCollector.CONFIG);
    }
}
