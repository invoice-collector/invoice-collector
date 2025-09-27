
import { SketchCollector } from '../../sketchCollector';

export class _4playersCollector extends SketchCollector {

    static CONFIG = {
        id: "4players",
        name: "4players",
        description: "i18n.collectors.4players.description",
        version: "0",
        website: "https://login.4players.de/4players.php/login/?callback=http://www.4players.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/72377.jpg",
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
        entryUrl: "https://login.4players.de/4players.php/login/?callback=http://www.4players.de/",
    }

    constructor() {
        super(_4playersCollector.CONFIG);
    }
}
