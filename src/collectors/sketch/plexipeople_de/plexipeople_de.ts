
import { SketchCollector } from '../../sketchCollector';

export class PlexipeopleDeCollector extends SketchCollector {

    static CONFIG = {
        id: "plexipeople_de",
        name: "Plexipeople.de",
        description: "i18n.collectors.plexipeople_de.description",
        version: "0",
        website: "https://www.plexipeople.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779016.jpg",
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
        entryUrl: "https://www.plexipeople.com/account",
    }

    constructor() {
        super(PlexipeopleDeCollector.CONFIG);
    }
}
