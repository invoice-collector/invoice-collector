
import { SketchCollector } from '../../sketchCollector';

export class SynthesiaCollector extends SketchCollector {

    static CONFIG = {
        id: "synthesia",
        name: "Synthesia",
        description: "i18n.collectors.synthesia.description",
        version: "0",
        website: "https://app.synthesia.io/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1781486.jpg",
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
        entryUrl: "https://app.synthesia.io/#/login",
    }

    constructor() {
        super(SynthesiaCollector.CONFIG);
    }
}
