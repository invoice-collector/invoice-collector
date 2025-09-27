
import { SketchCollector } from '../../sketchCollector';

export class PlantedCollector extends SketchCollector {

    static CONFIG = {
        id: "planted",
        name: "Planted",
        description: "i18n.collectors.planted.description",
        version: "0",
        website: "https://auth.planted.green/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445714.jpg",
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
        entryUrl: "https://auth.planted.green/login",
    }

    constructor() {
        super(PlantedCollector.CONFIG);
    }
}
