
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InternetWorldCollector extends SketchCollector {

    static CONFIG = {
        id: "internet_world",
        name: "INTERNET WORLD",
        description: "i18n.collectors.internet_world.description",
        version: "0",
        website: "https://www.internetworld.de/profil-1120069.html?snippet=order",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/875963.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.internetworld.de/profil-1120069.html?snippet=order",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InternetWorldCollector.CONFIG);
    }
}
