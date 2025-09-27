
import { SketchCollector } from '../../sketchCollector';

export class AlbwerkCollector extends SketchCollector {

    static CONFIG = {
        id: "albwerk",
        name: "Albwerk",
        description: "i18n.collectors.albwerk.description",
        version: "0",
        website: "https://portal.albwerk.de/energyportal/exec/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75341.jpg",
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
        entryUrl: "https://portal.albwerk.de/energyportal/exec/",
    }

    constructor() {
        super(AlbwerkCollector.CONFIG);
    }
}
