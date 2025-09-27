
import { SketchCollector } from '../../sketchCollector';

export class HomeToGoCollector extends SketchCollector {

    static CONFIG = {
        id: "home_to_go",
        name: "Home To Go",
        description: "i18n.collectors.home_to_go.description",
        version: "0",
        website: "https://my.hometogo.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2515358.jpg",
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
        entryUrl: "https://my.hometogo.com/",
    }

    constructor() {
        super(HomeToGoCollector.CONFIG);
    }
}
