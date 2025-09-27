
import { SketchCollector } from '../../sketchCollector';

export class GrowthHackingCollector extends SketchCollector {

    static CONFIG = {
        id: "growth_hacking",
        name: "Growth Hacking",
        description: "i18n.collectors.growth_hacking.description",
        version: "0",
        website: "https://app.growth-hacking.io/a/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1090212.jpg",
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
        entryUrl: "https://app.growth-hacking.io/a/login",
    }

    constructor() {
        super(GrowthHackingCollector.CONFIG);
    }
}
