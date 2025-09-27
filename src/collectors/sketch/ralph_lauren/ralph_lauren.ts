
import { SketchCollector } from '../../sketchCollector';

export class RalphLaurenCollector extends SketchCollector {

    static CONFIG = {
        id: "ralph_lauren",
        name: "Ralph Lauren",
        description: "i18n.collectors.ralph_lauren.description",
        version: "0",
        website: "https://www.ralphlauren.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122463.jpg",
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
        entryUrl: "https://www.ralphlauren.fr/",
    }

    constructor() {
        super(RalphLaurenCollector.CONFIG);
    }
}
