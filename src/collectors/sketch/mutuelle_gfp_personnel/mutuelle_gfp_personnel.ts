
import { SketchCollector } from '../../sketchCollector';

export class MutuelleGfpPersonnelCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_gfp_personnel",
        name: "Mutuelle GFP - Personnel",
        description: "i18n.collectors.mutuelle_gfp_personnel.description",
        version: "0",
        website: "https://assure.plansante.com/assures/auth",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/128475.jpg",
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
        entryUrl: "https://assure.plansante.com/assures/auth",
    }

    constructor() {
        super(MutuelleGfpPersonnelCollector.CONFIG);
    }
}
