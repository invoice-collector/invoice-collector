
import { SketchCollector } from '../../sketchCollector';

export class JyllandsPostenCollector extends SketchCollector {

    static CONFIG = {
        id: "jyllands_posten",
        name: "Jyllands-Posten",
        description: "i18n.collectors.jyllands_posten.description",
        version: "0",
        website: "https://jyllands-posten.dk/login?returnUrl=%2F%3FloggedIn%3Dtrue%26loggedIn%3Dtrue",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3206516.jpg",
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
        entryUrl: "https://jyllands-posten.dk/login?returnUrl=%2F%3FloggedIn%3Dtrue%26loggedIn%3Dtrue",
    }

    constructor() {
        super(JyllandsPostenCollector.CONFIG);
    }
}
