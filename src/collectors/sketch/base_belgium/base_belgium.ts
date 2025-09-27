
import { SketchCollector } from '../../sketchCollector';

export class BaseBelgiumCollector extends SketchCollector {

    static CONFIG = {
        id: "base_belgium",
        name: "base Belgium",
        description: "i18n.collectors.base_belgium.description",
        version: "0",
        website: "https://www.base.be/nl/klantenzone/mijn-facturen.html#/overview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/156405.jpg",
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
        entryUrl: "https://www.base.be/nl/klantenzone/mijn-facturen.html#/overview",
    }

    constructor() {
        super(BaseBelgiumCollector.CONFIG);
    }
}
