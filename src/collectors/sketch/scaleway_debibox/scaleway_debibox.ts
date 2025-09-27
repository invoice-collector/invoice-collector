
import { SketchCollector } from '../../sketchCollector';

export class ScalewayDebiboxCollector extends SketchCollector {

    static CONFIG = {
        id: "scaleway_debibox",
        name: "Scaleway - Debibox",
        description: "i18n.collectors.scaleway_debibox.description",
        version: "0",
        website: "https://console.online.net/fr/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/880699.jpg",
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
        entryUrl: "https://console.online.net/fr/login",
    }

    constructor() {
        super(ScalewayDebiboxCollector.CONFIG);
    }
}
