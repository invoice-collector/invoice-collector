
import { SketchCollector } from '../../sketchCollector';

export class BeatporthypeCollector extends SketchCollector {

    static CONFIG = {
        id: "beatporthype",
        name: "BeatportHype",
        description: "i18n.collectors.beatporthype.description",
        version: "0",
        website: "https://gethype.beatport.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/976557.jpg",
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
        entryUrl: "https://gethype.beatport.com/account",
    }

    constructor() {
        super(BeatporthypeCollector.CONFIG);
    }
}
