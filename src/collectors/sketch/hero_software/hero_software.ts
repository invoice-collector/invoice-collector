
import { SketchCollector } from '../../sketchCollector';

export class HeroSoftwareCollector extends SketchCollector {

    static CONFIG = {
        id: "hero_software",
        name: "Hero Software",
        description: "i18n.collectors.hero_software.description",
        version: "0",
        website: "https://login.hero-software.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/784173.jpg",
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
        entryUrl: "https://login.hero-software.de/",
    }

    constructor() {
        super(HeroSoftwareCollector.CONFIG);
    }
}
