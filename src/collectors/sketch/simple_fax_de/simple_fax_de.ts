
import { SketchCollector } from '../../sketchCollector';

export class SimpleFaxDeCollector extends SketchCollector {

    static CONFIG = {
        id: "simple_fax_de",
        name: "simple-fax.de",
        description: "i18n.collectors.simple_fax_de.description",
        version: "0",
        website: "https://simple-fax.de/app/kontoeinstellungen/?task=rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6528.jpg",
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
        entryUrl: "https://simple-fax.de/app/kontoeinstellungen/?task=rechnungen",
    }

    constructor() {
        super(SimpleFaxDeCollector.CONFIG);
    }
}
