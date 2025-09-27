
import { SketchCollector } from '../../sketchCollector';

export class PersonioCollector extends SketchCollector {

    static CONFIG = {
        id: "personio",
        name: "personio",
        description: "i18n.collectors.personio.description",
        version: "0",
        website: "https://www.personio.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26844.jpg",
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
        entryUrl: "https://www.personio.de/login/",
    }

    constructor() {
        super(PersonioCollector.CONFIG);
    }
}
