
import { SketchCollector } from '../../sketchCollector';

export class HerokuCollector extends SketchCollector {

    static CONFIG = {
        id: "heroku",
        name: "Heroku",
        description: "i18n.collectors.heroku.description",
        version: "0",
        website: "https://id.heroku.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7129.jpg",
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
        entryUrl: "https://id.heroku.com/login",
    }

    constructor() {
        super(HerokuCollector.CONFIG);
    }
}
