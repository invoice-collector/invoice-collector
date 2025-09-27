
import { SketchCollector } from '../../sketchCollector';

export class HydroOneBramptonCollector extends SketchCollector {

    static CONFIG = {
        id: "hydro_one_brampton",
        name: "Hydro One Brampton",
        description: "i18n.collectors.hydro_one_brampton.description",
        version: "0",
        website: "https://www.bramptonhydro.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23369.jpg",
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
        entryUrl: "https://www.bramptonhydro.com/",
    }

    constructor() {
        super(HydroOneBramptonCollector.CONFIG);
    }
}
