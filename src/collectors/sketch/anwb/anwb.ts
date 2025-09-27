
import { SketchCollector } from '../../sketchCollector';

export class AnwbCollector extends SketchCollector {

    static CONFIG = {
        id: "anwb",
        name: "anwb",
        description: "i18n.collectors.anwb.description",
        version: "0",
        website: "https://www.anwb.nl/inloggen#client_id=jjanIwY0NfPdbrnFWFQPDMCRCAlBgoMx&redirect_uri=https%3A%2F%2Fwww.anwb.nl%2Fmijn-anwb",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20521.jpg",
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
        entryUrl: "https://www.anwb.nl/inloggen#client_id=jjanIwY0NfPdbrnFWFQPDMCRCAlBgoMx&redirect_uri=https%3A%2F%2Fwww.anwb.nl%2Fmijn-anwb",
    }

    constructor() {
        super(AnwbCollector.CONFIG);
    }
}
