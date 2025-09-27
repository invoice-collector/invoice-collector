
import { SketchCollector } from '../../sketchCollector';

export class MutuelleAvilogCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_avilog",
        name: "Mutuelle Avilog",
        description: "i18n.collectors.mutuelle_avilog.description",
        version: "0",
        website: "https://www.avilog.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127972.jpg",
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
        entryUrl: "https://www.avilog.com/",
    }

    constructor() {
        super(MutuelleAvilogCollector.CONFIG);
    }
}
