
import { SketchCollector } from '../../sketchCollector';

export class KantoorartikelenNlCollector extends SketchCollector {

    static CONFIG = {
        id: "kantoorartikelen_nl",
        name: "Kantoorartikelen.nl",
        description: "i18n.collectors.kantoorartikelen_nl.description",
        version: "0",
        website: "http://www.kantoorartikelen.nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32380.jpg",
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
        entryUrl: "http://www.kantoorartikelen.nl",
    }

    constructor() {
        super(KantoorartikelenNlCollector.CONFIG);
    }
}
