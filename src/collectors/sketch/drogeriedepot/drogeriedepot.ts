
import { SketchCollector } from '../../sketchCollector';

export class DrogeriedepotCollector extends SketchCollector {

    static CONFIG = {
        id: "drogeriedepot",
        name: "Drogeriedepot",
        description: "i18n.collectors.drogeriedepot.description",
        version: "0",
        website: "https://www.drogeriedepot.de/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1172520.jpg",
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
        entryUrl: "https://www.drogeriedepot.de/login.php",
    }

    constructor() {
        super(DrogeriedepotCollector.CONFIG);
    }
}
