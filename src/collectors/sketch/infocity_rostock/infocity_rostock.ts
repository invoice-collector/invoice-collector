
import { SketchCollector } from '../../sketchCollector';

export class InfocityRostockCollector extends SketchCollector {

    static CONFIG = {
        id: "infocity_rostock",
        name: "Infocity Rostock",
        description: "i18n.collectors.infocity_rostock.description",
        version: "0",
        website: "https://mein.infocity-rostock.de/konto/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4568632.jpg",
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
        entryUrl: "https://mein.infocity-rostock.de/konto/rechnungen",
    }

    constructor() {
        super(InfocityRostockCollector.CONFIG);
    }
}
