
import { SketchCollector } from '../../sketchCollector';

export class DeutschePostElektronischesAuftragsmanagementCollector extends SketchCollector {

    static CONFIG = {
        id: "deutsche_post_elektronisches_auftragsmanagement",
        name: "Deutsche Post - Elektronisches Auftragsmanagement",
        description: "i18n.collectors.deutsche_post_elektronisches_auftragsmanagement.description",
        version: "0",
        website: "https://auftragsmanagement.deutschepost.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/221822.jpg",
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
        entryUrl: "https://auftragsmanagement.deutschepost.de",
    }

    constructor() {
        super(DeutschePostElektronischesAuftragsmanagementCollector.CONFIG);
    }
}
