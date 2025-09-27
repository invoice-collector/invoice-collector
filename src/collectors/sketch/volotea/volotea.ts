
import { SketchCollector } from '../../sketchCollector';

export class VoloteaCollector extends SketchCollector {

    static CONFIG = {
        id: "volotea",
        name: "Volotea",
        description: "i18n.collectors.volotea.description",
        version: "0",
        website: "https://booking.volotea.com/Invoice.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/180728.jpg",
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
        entryUrl: "https://booking.volotea.com/Invoice.aspx",
    }

    constructor() {
        super(VoloteaCollector.CONFIG);
    }
}
